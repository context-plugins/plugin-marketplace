using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type9>))]
public sealed record Type9 : OpenStringEnum<Type9>
{
    private Type9(string value) : base(value)
    {
    }

    public static readonly Type9 Facebook = new("FACEBOOK");

    public static readonly Type9 Instagram = new("INSTAGRAM");

    public TResult Match<TResult>(Func<TResult> onFacebook,
        Func<TResult> onInstagram,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Facebook => onFacebook(),
            _ when this == Instagram => onInstagram(),
            _ => otherwise(Value)
        };

    public void Match(Action onFacebook, Action onInstagram, Action<string> otherwise)
    {
        if (this == Facebook) onFacebook();
        else if (this == Instagram) onInstagram();
        else otherwise(Value);
    }
}
