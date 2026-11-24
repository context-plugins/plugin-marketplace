using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Platform>))]
public sealed record Platform : OpenStringEnum<Platform>
{
    private Platform(string value) : base(value)
    {
    }

    public static readonly Platform Instagram = new("INSTAGRAM");

    public static readonly Platform Facebook = new("FACEBOOK");

    public static readonly Platform Tiktok = new("TIKTOK");

    public TResult Match<TResult>(Func<TResult> onInstagram,
        Func<TResult> onFacebook,
        Func<TResult> onTiktok,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Instagram => onInstagram(),
            _ when this == Facebook => onFacebook(),
            _ when this == Tiktok => onTiktok(),
            _ => otherwise(Value)
        };

    public void Match(Action onInstagram, Action onFacebook, Action onTiktok, Action<string> otherwise)
    {
        if (this == Instagram) onInstagram();
        else if (this == Facebook) onFacebook();
        else if (this == Tiktok) onTiktok();
        else otherwise(Value);
    }
}
