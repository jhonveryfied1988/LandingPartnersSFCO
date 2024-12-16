import Form from "@/components/Form";

export default function Site() {
  return (
    <div
      className="min-h-screen flex items-start justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/house.jpg")'}}>
      <Form />
    </div>
  );
}
