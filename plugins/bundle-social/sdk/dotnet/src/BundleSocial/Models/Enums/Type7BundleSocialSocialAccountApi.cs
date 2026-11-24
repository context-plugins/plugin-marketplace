using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type7BundleSocialSocialAccountApi>))]
public sealed record Type7BundleSocialSocialAccountApi : OpenStringEnum<Type7BundleSocialSocialAccountApi>
{
    private Type7BundleSocialSocialAccountApi(string value) : base(value)
    {
    }

    public static readonly Type7BundleSocialSocialAccountApi Discord = new("DISCORD");

    public static readonly Type7BundleSocialSocialAccountApi Slack = new("SLACK");

    public static readonly Type7BundleSocialSocialAccountApi Reddit = new("REDDIT");

    public static readonly Type7BundleSocialSocialAccountApi Pinterest = new("PINTEREST");

    public static readonly Type7BundleSocialSocialAccountApi Facebook = new("FACEBOOK");

    public static readonly Type7BundleSocialSocialAccountApi Instagram = new("INSTAGRAM");

    public static readonly Type7BundleSocialSocialAccountApi Linkedin = new("LINKEDIN");

    public static readonly Type7BundleSocialSocialAccountApi Youtube = new("YOUTUBE");

    public static readonly Type7BundleSocialSocialAccountApi GoogleBusiness = new("GOOGLE_BUSINESS");

    public TResult Match<TResult>(Func<TResult> onDiscord,
        Func<TResult> onSlack,
        Func<TResult> onReddit,
        Func<TResult> onPinterest,
        Func<TResult> onFacebook,
        Func<TResult> onInstagram,
        Func<TResult> onLinkedin,
        Func<TResult> onYoutube,
        Func<TResult> onGoogleBusiness,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Discord => onDiscord(),
            _ when this == Slack => onSlack(),
            _ when this == Reddit => onReddit(),
            _ when this == Pinterest => onPinterest(),
            _ when this == Facebook => onFacebook(),
            _ when this == Instagram => onInstagram(),
            _ when this == Linkedin => onLinkedin(),
            _ when this == Youtube => onYoutube(),
            _ when this == GoogleBusiness => onGoogleBusiness(),
            _ => otherwise(Value)
        };

    public void Match(Action onDiscord,
        Action onSlack,
        Action onReddit,
        Action onPinterest,
        Action onFacebook,
        Action onInstagram,
        Action onLinkedin,
        Action onYoutube,
        Action onGoogleBusiness,
        Action<string> otherwise)
    {
        if (this == Discord) onDiscord();
        else if (this == Slack) onSlack();
        else if (this == Reddit) onReddit();
        else if (this == Pinterest) onPinterest();
        else if (this == Facebook) onFacebook();
        else if (this == Instagram) onInstagram();
        else if (this == Linkedin) onLinkedin();
        else if (this == Youtube) onYoutube();
        else if (this == GoogleBusiness) onGoogleBusiness();
        else otherwise(Value);
    }
}
