import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "./image";

const Card = ({ frontmatter, fields }) => {
  if (frontmatter.eurl) {
    return (
      <a className="anchor" href={frontmatter.eurl} target="_blank" rel="noreferrer">
        <div className="post-block">
          <div className="post-thumb-block">
            <Image
              {...frontmatter.thumbnail}
              imgStyle={{ objectFit: "cover" }}
              alt={frontmatter.title}
            />
          </div>
          <div className="post-content-block">
            <h2 className="post-title">
              {frontmatter.title}
            </h2>
            <div className="readmore-btn-wrapper">
              <span className="readmore-btn">
                see more <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
        </div>
      </a>
    );
  } else {
    return (
      <Link className="anchor" to={frontmatter.link ? frontmatter.link : fields.slug}>
        <div className="post-block">
          <div className="post-thumb-block">
            <Image
              {...frontmatter.thumbnail}
              imgStyle={{ objectFit: "cover" }}
              alt={frontmatter.title}
            />
          </div>
          <div className="post-content-block">
            <h2 className="post-title">
              {frontmatter.title}
            </h2>
            <div className="readmore-btn-wrapper">
              <span className="readmore-btn">
                see more <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Card;
