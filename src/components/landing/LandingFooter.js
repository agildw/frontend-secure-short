const LandingFooter = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full pb-5">
        <p>
          made with <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://github.com/agildw"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            agildw
          </a>
        </p>
      </div>
    </div>
  );
};

export default LandingFooter;
