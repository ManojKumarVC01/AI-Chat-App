import { useState } from "react";
import { PiOpenAiLogo } from "react-icons/pi";
import ReactMarkdown from "react-markdown";

function Project() {

  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    if (!prompt.trim()) return;

    setLoading(true);

    try {

      const response = await fetch("http://localhost:8083/ask", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      const data = await response.text();

      setAnswer(data);

    } catch (error) {

      console.log(error);

      setAnswer("Error while connecting backend");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] flex justify-center items-center p-6 overflow-hidden">

      <div className="w-full h-[95vh] rounded-[35px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-8 overflow-hidden">




        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div className="flex items-center gap-5">

            <div className="bg-cyan-500/20 p-4 rounded-2xl">

              <PiOpenAiLogo
                size={60}
                className="text-cyan-400"
              />

            </div>

            <div>

              <h1 className="text-white text-6xl font-black tracking-wide">
                AI Chat
              </h1>

              <p className="text-slate-300 text-xl mt-2">
                Smart AI Assistant powered by Spring Boot & React
              </p>

            </div>

          </div>

        </div>





        {/* Main Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[78vh]">





          {/* Left Section */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col">

            <h2 className="text-white text-3xl font-bold mb-6">
              Ask Anything
            </h2>

            <textarea
              placeholder="Type your question here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 bg-[#1e293b] border border-slate-600 rounded-3xl p-6 text-white text-xl resize-none outline-none focus:ring-2 focus:ring-cyan-400 leading-8 shadow-inner"
            />



            <button
              onClick={askAI}
              className="mt-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:scale-[1.02] transition-all duration-300 text-white py-5 rounded-3xl text-2xl font-bold shadow-lg shadow-cyan-500/20"
            >
              {loading ? "Thinking..." : "Ask AI"}
            </button>

          </div>






          {/* Right Section */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col overflow-hidden">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>

              <h2 className="text-cyan-300 text-3xl font-bold">
                AI Response
              </h2>

            </div>



            <div className="flex-1 overflow-y-auto bg-[#1e293b] rounded-3xl p-6 border border-slate-700 shadow-inner">

              <div className="prose prose-invert max-w-none text-white">

                {
                  answer
                  ?
                  <ReactMarkdown>
                    {answer}
                  </ReactMarkdown>
                  :
                  "Your intelligent AI response will appear here..."
                }

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Project;