using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

/// <summary>
/// Instagram only - connection method
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InstagramConnectionMethodBundleSocialSocialAccountApi>))]
public sealed record InstagramConnectionMethodBundleSocialSocialAccountApi : OpenStringEnum<InstagramConnectionMethodBundleSocialSocialAccountApi>
{
    private InstagramConnectionMethodBundleSocialSocialAccountApi(string value) : base(value)
    {
    }

    public static readonly InstagramConnectionMethodBundleSocialSocialAccountApi Facebook = new("FACEBOOK");

    public static readonly InstagramConnectionMethodBundleSocialSocialAccountApi Instagram = new("INSTAGRAM");

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
