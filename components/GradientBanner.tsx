import Image from "next/image";
import banner1 from "../assets/banner.png"
import banner2 from "../assets/banner2.png"

const GradientBanner = () => {
    return (
        <div className="absolute top-0 left-0 w-full min-h-screen ">
            <div className="relative -z-50  dark:bg-primary min-h-screen pb-10">
                <Image className="w-full blur-sm clip-diagonal pulsate1 absolute max-md:top-0  -top-5 left-0" src={banner1} alt="" />
                <Image className="w-full blur-sm clip-diagonal pulsate2 absolute max-md:top-0 -top-5 left-0" src={banner2} alt="" />
            </div>
        </div>
    );
}

export default GradientBanner;