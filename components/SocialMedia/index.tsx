import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const igLink = 'https://www.instagram.com/singlefamilyservices/?igsh=ZG5tbjY4aHgyZ2wz';
const fbLink = 'https://www.facebook.com/people/Single-Family-Services/100087976694027/';
const tiktokLink = 'https://www.tiktok.com/@sfcoservices?_t=8keKDgICBwE&_r=1';

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-7">
      <Link href={igLink}>
        <FaInstagram className="transition-transform duration-200 hover:scale-110" size={25}/>
      </Link>
      <Link href={fbLink}>
        <FaFacebook className="transition-transform duration-200 hover:scale-110" size={25}/>
      </Link>
      <Link href={tiktokLink}>
        <FaTiktok className="transition-transform duration-200 hover:scale-110" size={25}/>
      </Link>
    </div>
  )
}