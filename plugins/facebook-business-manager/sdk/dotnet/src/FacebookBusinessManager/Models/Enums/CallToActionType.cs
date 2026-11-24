using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CallToActionType>))]
public sealed record CallToActionType : OpenStringEnum<CallToActionType>
{
    private CallToActionType(string value) : base(value)
    {
    }

    public static readonly CallToActionType LearnMore = new("LEARN_MORE");

    public static readonly CallToActionType ShopNow = new("SHOP_NOW");

    public static readonly CallToActionType SignUp = new("SIGN_UP");

    public static readonly CallToActionType BookNow = new("BOOK_NOW");

    public static readonly CallToActionType Download = new("DOWNLOAD");

    public static readonly CallToActionType GetOffer = new("GET_OFFER");

    public static readonly CallToActionType ContactUs = new("CONTACT_US");

    public static readonly CallToActionType Subscribe = new("SUBSCRIBE");

    public TResult Match<TResult>(Func<TResult> onLearnMore,
        Func<TResult> onShopNow,
        Func<TResult> onSignUp,
        Func<TResult> onBookNow,
        Func<TResult> onDownload,
        Func<TResult> onGetOffer,
        Func<TResult> onContactUs,
        Func<TResult> onSubscribe,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LearnMore => onLearnMore(),
            _ when this == ShopNow => onShopNow(),
            _ when this == SignUp => onSignUp(),
            _ when this == BookNow => onBookNow(),
            _ when this == Download => onDownload(),
            _ when this == GetOffer => onGetOffer(),
            _ when this == ContactUs => onContactUs(),
            _ when this == Subscribe => onSubscribe(),
            _ => otherwise(Value)
        };

    public void Match(Action onLearnMore,
        Action onShopNow,
        Action onSignUp,
        Action onBookNow,
        Action onDownload,
        Action onGetOffer,
        Action onContactUs,
        Action onSubscribe,
        Action<string> otherwise)
    {
        if (this == LearnMore) onLearnMore();
        else if (this == ShopNow) onShopNow();
        else if (this == SignUp) onSignUp();
        else if (this == BookNow) onBookNow();
        else if (this == Download) onDownload();
        else if (this == GetOffer) onGetOffer();
        else if (this == ContactUs) onContactUs();
        else if (this == Subscribe) onSubscribe();
        else otherwise(Value);
    }
}
