import React, {Component} from 'react';
import MarvelApi from "../../services/marvel-api";
import './characters-list.css';

export default class CharacterList extends Component {

    marvelApi = new MarvelApi();

    state = {
        char: {}
    };

    constructor(){
        super();
        this.updateState();
    }

    onLoadCharacters = (char) => {
         this.setState({char});
    };

    updateState() {
        this.marvelApi
            .getCharacterById(1011334)
            .then(this.onLoadCharacters);
    }

    render() {
        const
            {
                char: {
                    cardItemImageLink,
                    cardItemName,
                    cardItemText
                }

            }
                = this.state;

        return (
            <div className="char-list-content container-char-list">
                <div className="row">
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src={cardItemImageLink}
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">{cardItemName}</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            {cardItemText}
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 pr-0">
                        <div className="char-list__card-item card-item">
                            <a href="/hero" className="card-item__link">
                                <div className="card-item__thumb-frame">
                                    <figure className="card-item__img-wrapper">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/3dman442.jpg"
                                             alt=""></img>
                                    </figure>
                                </div>
                                <div className="card-item-body">
                                    <p className="card-item-body__header">3-D Man</p>
                                    <div className="card-item-footer">
                                        <p className="card-item-footer__text">
                                            Charles
                                            Chandler &amp; Hal Chandler
                                        </p>
                                        <p className="card-item-footer__description"></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pagination__wrapper">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="/">&laquo; PREV </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="/">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/">4</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/">5</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="/">NEXT &raquo;</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};