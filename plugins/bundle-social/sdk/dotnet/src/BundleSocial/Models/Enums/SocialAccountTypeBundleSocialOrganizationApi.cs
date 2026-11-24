using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SocialAccountTypeBundleSocialOrganizationApi>))]
public sealed record SocialAccountTypeBundleSocialOrganizationApi : OpenStringEnum<SocialAccountTypeBundleSocialOrganizationApi>
{
    private SocialAccountTypeBundleSocialOrganizationApi(string value) : base(value)
    {
    }

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Tiktok = new("TIKTOK");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Youtube = new("YOUTUBE");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Instagram = new("INSTAGRAM");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Facebook = new("FACEBOOK");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Twitter = new("TWITTER");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Threads = new("THREADS");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Linkedin = new("LINKEDIN");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Pinterest = new("PINTEREST");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Reddit = new("REDDIT");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Mastodon = new("MASTODON");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Discord = new("DISCORD");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Slack = new("SLACK");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Bluesky = new("BLUESKY");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi GoogleBusiness = new("GOOGLE_BUSINESS");

    public static readonly SocialAccountTypeBundleSocialOrganizationApi Snapchat = new("SNAPCHAT");

    public TResult Match<TResult>(Func<TResult> onTiktok,
        Func<TResult> onYoutube,
        Func<TResult> onInstagram,
        Func<TResult> onFacebook,
        Func<TResult> onTwitter,
        Func<TResult> onThreads,
        Func<TResult> onLinkedin,
        Func<TResult> onPinterest,
        Func<TResult> onReddit,
        Func<TResult> onMastodon,
        Func<TResult> onDiscord,
        Func<TResult> onSlack,
        Func<TResult> onBluesky,
        Func<TResult> onGoogleBusiness,
        Func<TResult> onSnapchat,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Tiktok => onTiktok(),
            _ when this == Youtube => onYoutube(),
            _ when this == Instagram => onInstagram(),
            _ when this == Facebook => onFacebook(),
            _ when this == Twitter => onTwitter(),
            _ when this == Threads => onThreads(),
            _ when this == Linkedin => onLinkedin(),
            _ when this == Pinterest => onPinterest(),
            _ when this == Reddit => onReddit(),
            _ when this == Mastodon => onMastodon(),
            _ when this == Discord => onDiscord(),
            _ when this == Slack => onSlack(),
            _ when this == Bluesky => onBluesky(),
            _ when this == GoogleBusiness => onGoogleBusiness(),
            _ when this == Snapchat => onSnapchat(),
            _ => otherwise(Value)
        };

    public void Match(Action onTiktok,
        Action onYoutube,
        Action onInstagram,
        Action onFacebook,
        Action onTwitter,
        Action onThreads,
        Action onLinkedin,
        Action onPinterest,
        Action onReddit,
        Action onMastodon,
        Action onDiscord,
        Action onSlack,
        Action onBluesky,
        Action onGoogleBusiness,
        Action onSnapchat,
        Action<string> otherwise)
    {
        if (this == Tiktok) onTiktok();
        else if (this == Youtube) onYoutube();
        else if (this == Instagram) onInstagram();
        else if (this == Facebook) onFacebook();
        else if (this == Twitter) onTwitter();
        else if (this == Threads) onThreads();
        else if (this == Linkedin) onLinkedin();
        else if (this == Pinterest) onPinterest();
        else if (this == Reddit) onReddit();
        else if (this == Mastodon) onMastodon();
        else if (this == Discord) onDiscord();
        else if (this == Slack) onSlack();
        else if (this == Bluesky) onBluesky();
        else if (this == GoogleBusiness) onGoogleBusiness();
        else if (this == Snapchat) onSnapchat();
        else otherwise(Value);
    }
}
