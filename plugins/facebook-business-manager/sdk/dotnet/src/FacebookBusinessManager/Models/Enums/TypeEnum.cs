using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

/// <summary>
/// Type of post content
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Link = new("link");

    public static readonly TypeEnum Status = new("status");

    public static readonly TypeEnum Photo = new("photo");

    public static readonly TypeEnum Video = new("video");

    public static readonly TypeEnum Offer = new("offer");

    public TResult Match<TResult>(Func<TResult> onLink,
        Func<TResult> onStatus,
        Func<TResult> onPhoto,
        Func<TResult> onVideo,
        Func<TResult> onOffer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Link => onLink(),
            _ when this == Status => onStatus(),
            _ when this == Photo => onPhoto(),
            _ when this == Video => onVideo(),
            _ when this == Offer => onOffer(),
            _ => otherwise(Value)
        };

    public void Match(Action onLink,
        Action onStatus,
        Action onPhoto,
        Action onVideo,
        Action onOffer,
        Action<string> otherwise)
    {
        if (this == Link) onLink();
        else if (this == Status) onStatus();
        else if (this == Photo) onPhoto();
        else if (this == Video) onVideo();
        else if (this == Offer) onOffer();
        else otherwise(Value);
    }
}
