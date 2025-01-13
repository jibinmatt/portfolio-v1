export default function HomePage() {
  return (
    <main className="max-w-screen-2xl w-[1440px] h-screen flex flex-col justify-center items-center content-center bg-main-bg-color">
      <button className="px-10 hover:scale-105 transition-all w-[238px] h-[80px] bg-accent-color text-center flex justify-evenly items-center rounded-2xl">
        <svg className="" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.4197 17.4201L28.5997 22.6001C28.7851 22.7851 28.9322 23.0049 29.0325 23.2469C29.1329 23.4888 29.1846 23.7482 29.1846 24.0101C29.1846 24.272 29.1329 24.5314 29.0325 24.7734C28.9322 25.0153 28.7851 25.2351 28.5997 25.4201L23.4197 30.6001C22.1597 31.8601 19.9997 30.9601 19.9997 29.1801V18.8201C19.9997 17.0401 22.1597 16.1601 23.4197 17.4201Z" fill="white"/>
        </svg>
        <h4 className=" text-[#fff] text-2xl">about-me</h4>
      </button>
      <h1 className="text-4xl mt-9 ">Hi, I&#39;m <a href="/"><span className="red-squiggly-line">Jibin</span></a> James</h1>
      <h4 className="text-2xl text-accent-color">a developer, an avid reader, and a <span className="underline">designer</span>*</h4>
      <div className="mt-9 w-[92%] h-[693px] flex justify-between items-center">
        <div className="w-[23.4%] h-full bg-accent-color rounded-3xl"></div>
        <div className="w-[23.4%] h-full bg-accent-color rounded-3xl"></div>
        <div className="w-[23.4%] h-full bg-accent-color rounded-3xl"></div>
        <div className="w-[23.4%] h-full bg-accent-color rounded-3xl"></div>
      </div>
      <footer className="w-[1440px] h-[30px] flex ">
        <p className="mx-5 text-accent-color">*ui/ux design is a bit difficult for my brain to understand, but I’m trying</p>
      </footer>
    </main>
  );
}
