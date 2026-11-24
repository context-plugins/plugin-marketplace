using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PlatformType>))]
public sealed record PlatformType : OpenStringEnum<PlatformType>
{
    private PlatformType(string value) : base(value)
    {
    }

    public static readonly PlatformType Tiktok = new("TIKTOK");

    public static readonly PlatformType Youtube = new("YOUTUBE");

    public static readonly PlatformType Instagram = new("INSTAGRAM");

    public static readonly PlatformType Facebook = new("FACEBOOK");

    public static readonly PlatformType Threads = new("THREADS");

    public static readonly PlatformType Reddit = new("REDDIT");

    public static readonly PlatformType Pinterest = new("PINTEREST");

    public static readonly PlatformType Mastodon = new("MASTODON");

    public static readonly PlatformType Linkedin = new("LINKEDIN");

    public static readonly PlatformType Bluesky = new("BLUESKY");

    public static readonly PlatformType GoogleBusiness = new("GOOGLE_BUSINESS");

    public static readonly PlatformType Snapchat = new("SNAPCHAT");

    public static readonly PlatformType Twitter = new("TWITTER");

    public TResult Match<TResult>(Func<TResult> onTiktok,
        Func<TResult> onYoutube,
        Func<TResult> onInstagram,
        Func<TResult> onFacebook,
        Func<TResult> onThreads,
        Func<TResult> onReddit,
        Func<TResult> onPinterest,
        Func<TResult> onMastodon,
        Func<TResult> onLinkedin,
        Func<TResult> onBluesky,
        Func<TResult> onGoogleBusiness,
        Func<TResult> onSnapchat,
        Func<TResult> onTwitter,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Tiktok => onTiktok(),
            _ when this == Youtube => onYoutube(),
            _ when this == Instagram => onInstagram(),
            _ when this == Facebook => onFacebook(),
            _ when this == Threads => onThreads(),
            _ when this == Reddit => onReddit(),
            _ when this == Pinterest => onPinterest(),
            _ when this == Mastodon => onMastodon(),
            _ when this == Linkedin => onLinkedin(),
            _ when this == Bluesky => onBluesky(),
            _ when this == GoogleBusiness => onGoogleBusiness(),
            _ when this == Snapchat => onSnapchat(),
            _ when this == Twitter => onTwitter(),
            _ => otherwise(Value)
        };

    public void Match(Action onTiktok,
        Action onYoutube,
        Action onInstagram,
        Action onFacebook,
        Action onThreads,
        Action onReddit,
        Action onPinterest,
        Action onMastodon,
        Action onLinkedin,
        Action onBluesky,
        Action onGoogleBusiness,
        Action onSnapchat,
        Action onTwitter,
        Action<string> otherwise)
    {
        if (this == Tiktok) onTiktok();
        else if (this == Youtube) onYoutube();
        else if (this == Instagram) onInstagram();
        else if (this == Facebook) onFacebook();
        else if (this == Threads) onThreads();
        else if (this == Reddit) onReddit();
        else if (this == Pinterest) onPinterest();
        else if (this == Mastodon) onMastodon();
        else if (this == Linkedin) onLinkedin();
        else if (this == Bluesky) onBluesky();
        else if (this == GoogleBusiness) onGoogleBusiness();
        else if (this == Snapchat) onSnapchat();
        else if (this == Twitter) onTwitter();
        else otherwise(Value);
    }
}
