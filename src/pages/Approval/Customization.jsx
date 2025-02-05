
const Customization = () => {
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
               {/* Left Side: Content */}
               <div className="lg:w-1/2 text-center lg:text-left">
               <p className="text-orange-500 font-bold text-xl">Customization</p>
                 <h1 className="text-4xl font-semibold text-gray-800 mt-2">
                 Customize your process design 
                 </h1>
                 <p className="text-gray-500 mt-4 font-semibold">
                 Customize your approval process design that suits the needs of your business.
                 </p>
                 <button className="mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-1 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40 text-lg">
            Free demo
           </button>
               </div>
       
               {/* Right Side: Image */}
               <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co.com/s505jFY/approval2.jpg" alt=""  className="rounded-xl"/>
               </div>
             </div>
           </div>
    );
};

export default Customization;