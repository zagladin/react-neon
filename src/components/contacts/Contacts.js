import React, {Component} from 'react';
import './Contacts.scss';

class Contacts extends Component {
  constructor(props) {
    super(props);

     this.links = [
      {
        'url': 'https://t.me/zagladin',
        'text': 'Telegram',
      },
      {
        'url': 'mailto:georgii@zagladin.pro',
        'text': 'Email',
      },
      {
        'url': 'https://www.linkedin.com/in/georgii-zagladin/',
        'text': 'LinkedIn',
      },
    ];
  }


  render() {

    return (
        <div className="contacts-card">
          <div className="header">
							Contact me
						</div>
          <div className="links">
            {this.links.map((block, index) =>
                <a key={index}
                   className="link"
                   href={block.url}
                >
                    {block.text}
                </a>)}
          </div>

        </div>
    );
  }
}

export default Contacts;
