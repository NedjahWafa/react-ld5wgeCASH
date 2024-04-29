import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/CASH_Assurances_Logo.svg"
            alt="CASH Assurances, Algérie."
            height="40px"
            width="100px"
          />
          <div className="mb-3 media">
            <div className="media-body">
              <h5>
                <strong>Email : </strong> contact@cash-assurances.dz
              </h5>
            </div>
          </div>
          <div className="mb-3 media">
            <div className="media-body">
              <h5>
                <strong>Adresse :</strong> 135 Boulevard des Martyrs.
              </h5>
            </div>
          </div>
          <div className="footer-social-media">
            <a
              href="https://www.facebook.com/CASHASSURANC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.facebook.com/images/fb_icon_325x325.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.twitter.com/CASHassurances?s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b?h=464"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/cash-assurances"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKs8r8Zd_xOz-qdO6Mk9bQXGh-CP4kiHqJtIsZ2CP2Q&s"
                alt="linkedin"
              />
            </a>
            <a
              href="https://instagram.com/cash_assurances"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://youtube.com/channel/UCLGHfcwP6YOQsxMov2IZhdw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                alt="Youtube"
              />
            </a>
          </div>
        </div>
        <div className="footer-lists">
          <div className="footer-segment">
            <h3>Nos Produits</h3>
            <ul>
              <li>
                <a href="/assurances/assurances-particuliers">
                  Assurances pour les Particuliers
                </a>
              </li>
              <li>
                <a href="/assurances/assurances-professionnels">
                  Assurances pour les Professionnels
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-segment">
            <h3>Assurances pour les Entreprises</h3>
            <ul>
              <li>
                <a href="/assurances/assurances-entreprises/responsabilites-civiles">
                  Responsabilités Civiles
                </a>
              </li>
              <li>
                <a href="/assurances/assurances-entreprises/dommages-biens">
                  Dommages Biens
                </a>
              </li>
              <li>
                <a href="/assurances/assurances-entreprises/transport">
                  Transport
                </a>
              </li>
              <li>
                <a href="/assurances/assurances-entreprises/constructions">
                  Constructions
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-segment">
            <h3>Nos Devis</h3>
            <ul>
              <li>
                <a href="/devis-automobile">Devis Automobile</a>
              </li>
              <li>
                <a href="/devis-multirisques-habitation">
                  Devis Multirisques Habitation
                </a>
              </li>
              <li>
                <a href="/devis-catastrophes-naturelles">
                  Devis Catastrophes Naturelles
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-segment">
            <h3>A propos de nous</h3>
            <ul>
              <li>
                <a href="/qui-sommes-nous">Qui Sommes nous ?</a>
              </li>
            </ul>
          </div>
          <div className="footer-segment">
            <h3>Autres</h3>
            <ul>
              <li>
                <a href="/articles">Actualités</a>
              </li>
              <li>
                <a href="/recrutement">Recrutement</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@2020 Tous droits résévés par cash-assurances.dz</p>
      </div>
    </footer>
  );
}

export default Footer;
