import React, { Component } from "react";
import moment from "moment";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
    console.log(this.props);
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div
        className="ui card"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <div className="image">
          <img ref={this.imageRef} alt={description} src={urls.regular} />
        </div>
        <div className="content">
          <a href={this.props.image.user.portfolio_url} className="header">
            {this.props.image.user.instagram_username}
          </a>
          <div className="meta">
            <span className="date">
              {moment(this.props.image.user.updated_at).format("LLL")}
            </span>
          </div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <a href={this.props.image.user.links.likes}>
            <i className="user icon"></i>
            Likes: {this.props.image.user.total_likes}
          </a>
        </div>
      </div>
    );
  }
}

export default ImageCard;
