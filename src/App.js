const React = require('react');
const { useEffect, useState } = require('react'); 
const axios = require('axios');

const App = () => {
  const [message, setMessage] = useState("");
  const [update, setUpdate] = useState(false)
  const [messages, setMessages] = useState([]);

  const url = "https://1dvewlcsmi.execute-api.us-west-2.amazonaws.com/dev";

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      key1: message,
      method: "POST",
    };

    axios
      .post(url, data)
      .then((response) => {
        console.log("Response:", response.data);
        setUpdate(true)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = {
          method: "GET",
        };

        const res = axios
          .post(url, data)
          .then((response) => {
            //console.log("Response:", response.data.body);
            setMessages(response.data);

            setUpdate(false)
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        console.log(res);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [update,url]);

  return (
    <div>
      <div className="flex items-center justify-center h-[50vh]">
        <div className="w-full max-w-xs">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Message
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="mb-6"></div>
            <div className="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Add to DB
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul className="list-disc flex items-center justify-center h-[50vh] flex-col">
        {messages?.map((item) => (
          <li key={item.date}>{item.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;