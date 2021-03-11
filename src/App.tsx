import { motion, AnimatePresence } from "framer-motion";
import {useState} from 'react'
import "./custom.scss";
import classnames from "classnames";


import data from './data'

function App() {
  const [expandedItem, setExpandedItem] = useState<number>();

  const boxAnimation = {
    initial: {
      y: 0,
    },
    float: {
      y: -20,
    },
  };

  const caretAnimation = {
    initial: {
      rotate: 0,
    },
    expanded: {
      rotate: 180,
    },
  };

  return (
    <div className=" d-flex justify-content-center align-items-center vh-100 app">
      <div className="row white-box bg-white rounded">
        <div className=" position-relative col-md-6 p-0 left-container ">
          <motion.img
            alt="Box"
            src="images/illustration-box-desktop.svg"
            className="position-absolute animated-box "
            variants={boxAnimation}
            animate="float"
            transition={{
              ease: "easeInOut",
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
          />
          <div className="ilustration-image overflow-hidden position-relative h-100">
            <img
              src="images/illustration-woman-online-desktop.svg "
              alt="Illustration"
              className="w-100 ml-n5"
            />
            <img
              alt="Background"
              src="images/bg-pattern-desktop.svg"
              className="position-absolute w-100 image-shadow"
            />
          </div>
        </div>
        <div className="col-md-6 right-container d-flex flex-column justify-content-center">
          <h1>FAQ</h1>
          <div className="w-75">
            {data.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setExpandedItem(item.id)}
                className=""
              >
                <div className="d-flex align-items-center justify-content-between accordions">
                  <p
                    className={classnames(
                      "duration-150 text-desaturated-dark-blue m-0 ",
                      { "font-weight-bold": expandedItem === item.id }
                    )}
                  >
                    {item.title}
                  </p>
                  <motion.img
                    alt="Caret"
                    src="images/icon-arrow-down.svg"
                    className="h-25"
                    variants={caretAnimation}
                    animate={expandedItem === item.id ? "expanded" : "initial"}
                  />
                </div>
                <AnimatePresence>
                  {expandedItem === item.id && (
                    <motion.p
                      className="mt-3 text-dark-blue"
                      key={item.id}
                      initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                      animate={{ height: "auto", opacity: 1, marginBottom: 12 }}
                      exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                      transition={{ type: "tween" }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                <hr className="border-light-blue " />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
