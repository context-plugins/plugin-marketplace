using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type3BundleSocialSocialAccountApi>))]
public sealed record Type3BundleSocialSocialAccountApi : OpenStringEnum<Type3BundleSocialSocialAccountApi>
{
    private Type3BundleSocialSocialAccountApi(string value) : base(value)
    {
    }

    public static readonly Type3BundleSocialSocialAccountApi Facebook = new("FACEBOOK");

    public static readonly Type3BundleSocialSocialAccountApi Instagram = new("INSTAGRAM");

    public static readonly Type3BundleSocialSocialAccountApi Linkedin = new("LINKEDIN");

    public static readonly Type3BundleSocialSocialAccountApi Youtube = new("YOUTUBE");

    public static readonly Type3BundleSocialSocialAccountApi GoogleBusiness = new("GOOGLE_BUSINESS");

    public TResult Match<TResult>(Func<TResult> onFacebook,
        Func<TResult> onInstagram,
        Func<TResult> onLinkedin,
        Func<TResult> onYoutube,
        Func<TResult> onGoogleBusiness,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Facebook => onFacebook(),
            _ when this == Instagram => onInstagram(),
            _ when this == Linkedin => onLinkedin(),
            _ when this == Youtube => onYoutube(),
            _ when this == GoogleBusiness => onGoogleBusiness(),
            _ => otherwise(Value)
        };

    public void Match(Action onFacebook,
        Action onInstagram,
        Action onLinkedin,
        Action onYoutube,
        Action onGoogleBusiness,
        Action<string> otherwise)
    {
        if (this == Facebook) onFacebook();
        else if (this == Instagram) onInstagram();
        else if (this == Linkedin) onLinkedin();
        else if (this == Youtube) onYoutube();
        else if (this == GoogleBusiness) onGoogleBusiness();
        else otherwise(Value);
    }
}
