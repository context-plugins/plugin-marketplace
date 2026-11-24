using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PlatformScope>))]
public sealed record PlatformScope : OpenStringEnum<PlatformScope>
{
    private PlatformScope(string value) : base(value)
    {
    }

    public static readonly PlatformScope Instagram = new("INSTAGRAM");

    public static readonly PlatformScope Facebook = new("FACEBOOK");

    public static readonly PlatformScope Both = new("BOTH");

    public static readonly PlatformScope Tiktok = new("TIKTOK");

    public TResult Match<TResult>(Func<TResult> onInstagram,
        Func<TResult> onFacebook,
        Func<TResult> onBoth,
        Func<TResult> onTiktok,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Instagram => onInstagram(),
            _ when this == Facebook => onFacebook(),
            _ when this == Both => onBoth(),
            _ when this == Tiktok => onTiktok(),
            _ => otherwise(Value)
        };

    public void Match(Action onInstagram, Action onFacebook, Action onBoth, Action onTiktok, Action<string> otherwise)
    {
        if (this == Instagram) onInstagram();
        else if (this == Facebook) onFacebook();
        else if (this == Both) onBoth();
        else if (this == Tiktok) onTiktok();
        else otherwise(Value);
    }
}
