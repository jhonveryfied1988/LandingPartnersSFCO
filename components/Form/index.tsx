"use client";
import { useState, useEffect } from "react";
import { FloatingLabelInput, InputOptions } from "../FloatingLabelInput";
import customAxios from "@/lib/axios";

interface GeoapifyFeature {
  properties: {
    formatted: string;
  };
}

interface GeoapifyResponse {
  features: GeoapifyFeature[];
}


const inputs: InputOptions[] = [
  {
    id: "name",
    text: "Name",
    type: "text",
    required: true,
  },
  {
    id: "email",
    text: "Email address",
    type: "email",
    required: true,
  },
  {
    id: "phone",
    text: "Phone number",
    type: "tel",
    required: true,
  },
  {
    id: "address",
    text: "Address",
    type: "text",
    required: true,
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  agreeTerms: boolean;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  agreeTerms: false,
};

export default function ContactForm() {
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuggestionSelected, setIsSuggestionSelected] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    if(id === "address"){
      setIsSuggestionSelected(false)
    }
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSendForm = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.name) {
      return setErrorMessage("Please enter your name.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!emailPattern.test(formData.email)) {
      return setErrorMessage("Please enter a valid email address.");
    }

    if (!phonePattern.test(formData.phone)) {
      return setErrorMessage("Please enter a valid 10-digit phone number.");
    }

    if(!formData.address){
      return setErrorMessage("Please enter an address");
    }

    if (!formData.agreeTerms) {
      return setErrorMessage("You must accept the terms and conditions.");
    }
    setIsLoading(true);

    try {
      const response = await customAxios.post("leads", {
        ...formData,
        source: "Landing SFCO",
        status: "Landing SFCO",
        assigned: "Landing SFCO",
      });

      if (response.data.status === 200) {
        // Maneja una respuesta exitosa
        setSuccessMessage("Form submitted successfully!");
        setFormData(initialFormData); // Resetea el formulario
      } else {
        // Maneja errores del servidor
        const errorData = response.data.error;

        setErrorMessage(errorData || "There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessage(
        "There was an error submitting the form. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (formData.address.length == 0 || isSuggestionSelected == true) return;
    const getData = setTimeout(() => {
      fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${formData.address}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) =>
          setSuggestions(
            data.features.map((feature: GeoapifyFeature) => feature.properties.formatted)
          )
        )
        .catch((error) => console.error("Error fetching data:", error));
    }, 500);
    return () => clearTimeout(getData);
  }, [formData.address]);

  return (
    <div className="pt-10 max-w-xl p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg sm:p-10 lg:p-16 mt-5">
      <h2 className="flex mb-5 text-3xl font-semibold text-green-600 dark:text-white xl:text-section title2 font-sans">
        Get Fair Cash Offer today!
      </h2>
      <h4 className="flex text-lg mb-5 text-black dark:text-white font-sans">
      Avoid commissions, making repairs, and the months of uncertainty. You’ll get a fair “as-is” cash offer on your house. More Cash In Your Pocket. Begin the process by completing our brief form.
      </h4>
      <form onSubmit={handleSendForm} noValidate>
        {inputs.map((input, index) => (
          <FloatingLabelInput
            id={input.id}
            text={input.text}
            type={input.type}
            key={index}
            value={formData[input.id as keyof Omit<FormData, "agreeTerms">]}
            function={handleChange}
          />
        ))}

        {suggestions.length > 0 && (
          <ul className="w-full bg-white shadow-md z-10 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => {
                  setFormData((prevData) => ({
                    ...prevData,
                    address: suggestion,
                  }));
                  setSuggestions([]);
                  setIsSuggestionSelected(true);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center mb-4">
          <input
            id="agreeTerms"
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="agreeTerms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Accept terms and conditions
            <a
              href="https://www.singlefamilyservices.com/policy"
              className="text-blue-600 hover:underline dark:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              view here{" "}
            </a>
            .
          </label>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}

        <div className="flex flex-wrap gap-4 xl:justify-between ">
          <button
            type="submit"
            aria-label="cash-offer"
            className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-medium text-white duration-300 ease-in-out bg-green-600 hover:bg-green-700 dark:bg-green-600 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Get Cash Offer"}
            <svg
              className="fill-white"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
