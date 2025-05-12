import "./SubscribeSection.scss";
import image1 from "../../images/subscribe01.png";
import image2 from "../../images/subscribe02.png";
import image3 from "../../images/subscribe03.png";
import image4 from "../../images/subscribe04.png";
import image5 from "../../images/subscribe05.png";
import image6 from "../../images/subscribe06.png";
import AnimatedButton from "../utils-components/AnimatedButton/AnimatedButton";
import { AppRoute } from "../../utils/consts";
import { useTranslation } from "../../hooks/useTranslation";

function SubscribeSection() {
  const { translate } = useTranslation();

  return (
    <section className="subscribe">
      <div className="subscribe__images-area">
        <img
          className="subscribe__image"
          src={image1}
          alt={translate("subscribe.images.skinCream")}
        />
        <img
          className="subscribe__image"
          src={image2}
          alt={translate("subscribe.images.bodyOils")}
        />
        <img
          className="subscribe__image"
          src={image3}
          alt={translate("subscribe.images.faceCare")}
        />
        <img
          className="subscribe__image"
          src={image4}
          alt={translate("subscribe.images.cosmeticsSet")}
        />
        <img
          className="subscribe__image"
          src={image5}
          alt={translate("subscribe.images.bodyCream")}
        />
        <img
          className="subscribe__image"
          src={image6}
          alt={translate("subscribe.images.bodyOil")}
        />
      </div>
      <div className="subscribe__description-area">
        <h2 className="subscribe__title">{translate("subscribe.title")}</h2>
        <p className="subscribe__text">
          {translate("subscribe.description.prefix")}{" "}
          <a className="subscribe__link" href="#" target="_blank">
            @marooncare
          </a>{" "}
          {translate("subscribe.description.suffix")}
        </p>
        <AnimatedButton
          text={translate("subscribe.buttonText")}
          onClick={AppRoute.Subscribe}
        />
      </div>
    </section>
  );
}

export default SubscribeSection;
