const Navbar = ():JSX.Element => {
    return (
        <nav className="">
            <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">              
                    <img src="/icon.svg" className="h-10 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrapt text-white">Code Converter</span>
            </div>
        </nav>
    )
}


export default Navbar