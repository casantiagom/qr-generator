import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearQR();

    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);

      generateQR(url);
    }, 1000);

    const generateQR = (url) => {
      const qrcode = new QRCode("qrcode", {
        text: url,
        width: 300,
        height: 300,
      });
    };
  };

  const clearQR = () => {
    document.querySelector("#qrcode").innerHTML = "";
  };

  return (
    <div>
      <Head>
        <title>QR Generator by Carlos Santiago</title>
        <meta name="description" content="Generate QR code" />
        <link rel="icon" href="/qr_code.svg" />
      </Head>
      <nav className="flex items-center justify-between flex-wrap bg-first p-6 font-lato">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 22.5V6h16.5v16.5Zm3-3h10.5V9H9ZM6 42V25.5h16.5V42Zm3-3h10.5V28.5H9Zm16.5-16.5V6H42v16.5Zm3-3H39V9H28.5ZM37.9 42v-4.1H42V42ZM25.5 29.65V25.5h4.1v4.15Zm4.1 4.1v-4.1h4.15v4.1Zm-4.1 4.15v-4.15h4.1v4.15Zm4.1 4.1v-4.1h4.15V42Zm4.15-4.1v-4.15h4.15v4.15Zm0-8.25V25.5h4.15v4.15Zm4.15 4.1v-4.1H42v4.1Z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            QR Generator
          </span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"></div>
      </nav>
      <main className="flex flex-wrap">
        <div className="flex p-16 justify-center w-full flex-wrap">
          <div className="text-center p-4 pb-16 w-full">
            <p className="font-lato">Enter your URL to generate a QR code</p>
          </div>
          <form
            id="generate"
            onSubmit={onGenerateSubmit}
            className="justify-center px-4"
          >
            <div className="flex items-center border-b border-first py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-fourth mr-14 py-1 px-6 leading-tight focus:outline-none font-lato"
                type="url"
                placeholder="https://wwww.example.com"
                aria-label="web page"
                pattern="https://.*"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              ></input>
              <button
                className="flex-shrink-0 bg-first hover:bg-third hover:text-first border-first hover:border-third text-sm border-2 text-white py-1 px-2 rounded font-lato"
                type="submit"
                value="submit"
              >
                Generate QR
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-5xl m-auto flex text-center align-center justify-center mt-10 mb-20">
          {isGenerating ? (
            <div id="spinner" className="w-full" role="status">
              <svg
                width="120"
                height="120"
                viewBox="0 0 58 58"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g
                    transform="translate(2 1)"
                    stroke="#ffff"
                    strokeWidth="1.5"
                  >
                    <circle
                      cx="42.601"
                      cy="11.462"
                      r="5"
                      fillOpacity="1"
                      fill="#79B4B7"
                    >
                      <animate
                        attributeName="fill-opacity"
                        begin="0s"
                        dur="1.3s"
                        values="1;0;0;0;0;0;0;0"
                        calcMode="linear"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="49.063"
                      cy="27.063"
                      r="5"
                      fillOpacity="0"
                      fill="#79B4B7"
                    >
                      <animate
                        attributeName="fill-opacity"
                        begin="0s"
                        dur="1.3s"
                        values="0;1;0;0;0;0;0;0"
                        calcMode="linear"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="42.601"
                      cy="42.663"
                      r="5"
                      fillOpacity="0"
                      fill="#79B4B7"
                    >
                      <animate
                        attributeName="fill-opacity"
                        begin="0s"
                        dur="1.3s"
                        values="0;0;1;0;0;0;0;0"
                        calcMode="linear"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="27"
                      cy="49.125"
                      r="5"
                      fillOpacity="0"
                      fill="#79B4B7"
                    >
                      <animate
                        attributeName="fill-opacity"
                        begin="0s"
                        dur="1.3s"
                        values="0;0;0;1;0;0;0;0"
                        calcMode="linear"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="11.399"
                      cy="42.663"
                      r="5"
                      fillOpacity="0"
                      fill="#79B4B7"
                    >
                      <animate
                        attributeName="fill-opacity"
                        begin="0s"
                        dur="1.3s"
                        values="0;0;0;0;1;0;0;0"
                        calcMode="linear"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="4.938"
                      cy="27.063"
                      r="5"
                      fillOpacity="0"
                      fill="#79B4B7"
                    >
                      <animate
                        attributeName="fill-opacity"
                        begin="0s"
                        dur="1.3s"
                        values="0;0;0;0;0;1;0;0"
                        calcMode="linear"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="11.399"
                      cy="11.462"
                      r="5"
                      fillOpacity="0"
                      fill="#79B4B7"
                    >
                      <animate
                        attributeName="fill-opacity"
                        begin="0s"
                        dur="1.3s"
                        values="0;0;0;0;0;0;1;0"
                        calcMode="linear"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="27" cy="5" r="5" fillOpacity="0" fill="#79B4B7">
                      <animate
                        attributeName="fill-opacity"
                        begin="0s"
                        dur="1.3s"
                        values="0;0;0;0;0;0;0;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </g>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div></div>
          )}

          <div id="qrcode" className="m-auto"></div>
        </div>
      </main>

      <footer className="font-lato text-xs text-center bottom">
        Powered by <span className="font-lato text-xs">Carlos Santiago</span>
      </footer>
    </div>
  );
}
