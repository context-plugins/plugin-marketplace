using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CallToActionType>))]
public sealed record CallToActionType : OpenStringEnum<CallToActionType>
{
    private CallToActionType(string value) : base(value)
    {
    }

    public static readonly CallToActionType Book = new("BOOK");

    public static readonly CallToActionType Order = new("ORDER");

    public static readonly CallToActionType Shop = new("SHOP");

    public static readonly CallToActionType LearnMore = new("LEARN_MORE");

    public static readonly CallToActionType SignUp = new("SIGN_UP");

    public static readonly CallToActionType Call = new("CALL");

    public TResult Match<TResult>(Func<TResult> onBook,
        Func<TResult> onOrder,
        Func<TResult> onShop,
        Func<TResult> onLearnMore,
        Func<TResult> onSignUp,
        Func<TResult> onCall,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Book => onBook(),
            _ when this == Order => onOrder(),
            _ when this == Shop => onShop(),
            _ when this == LearnMore => onLearnMore(),
            _ when this == SignUp => onSignUp(),
            _ when this == Call => onCall(),
            _ => otherwise(Value)
        };

    public void Match(Action onBook,
        Action onOrder,
        Action onShop,
        Action onLearnMore,
        Action onSignUp,
        Action onCall,
        Action<string> otherwise)
    {
        if (this == Book) onBook();
        else if (this == Order) onOrder();
        else if (this == Shop) onShop();
        else if (this == LearnMore) onLearnMore();
        else if (this == SignUp) onSignUp();
        else if (this == Call) onCall();
        else otherwise(Value);
    }
}
