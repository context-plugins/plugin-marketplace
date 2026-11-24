using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PlatformBundleSocialConversationApi>))]
public sealed record PlatformBundleSocialConversationApi : OpenStringEnum<PlatformBundleSocialConversationApi>
{
    private PlatformBundleSocialConversationApi(string value) : base(value)
    {
    }

    public static readonly PlatformBundleSocialConversationApi Instagram = new("INSTAGRAM");

    public static readonly PlatformBundleSocialConversationApi Facebook = new("FACEBOOK");

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
