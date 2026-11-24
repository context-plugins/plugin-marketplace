using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

/// <summary>
/// Messaging platform. Extensible: new platforms are added over time, so handle unknown values gracefully rather than switching exhaustively.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Platform30>))]
public sealed record Platform30 : OpenStringEnum<Platform30>
{
    private Platform30(string value) : base(value)
    {
    }

    public static readonly Platform30 Instagram = new("INSTAGRAM");

    public static readonly Platform30 Facebook = new("FACEBOOK");

    public TResult Match<TResult>(Func<TResult> onInstagram,
        Func<TResult> onFacebook,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Instagram => onInstagram(),
            _ when this == Facebook => onFacebook(),
            _ => otherwise(Value)
        };

    public void Match(Action onInstagram, Action onFacebook, Action<string> otherwise)
    {
        if (this == Instagram) onInstagram();
        else if (this == Facebook) onFacebook();
        else otherwise(Value);
    }
}
