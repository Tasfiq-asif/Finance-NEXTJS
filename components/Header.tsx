import HeaderLogo from "./HeaderLogo";

const Header = () => {
    return (
        <header className="bg-gradient-to-b form-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36 ">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-center mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo/>
                    </div>
                </div>
            </div>
        </header>

     );
}

export default Header;