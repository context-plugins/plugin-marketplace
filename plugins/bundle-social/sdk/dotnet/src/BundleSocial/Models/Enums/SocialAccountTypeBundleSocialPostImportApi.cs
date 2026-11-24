using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SocialAccountTypeBundleSocialPostImportApi>))]
public sealed record SocialAccountTypeBundleSocialPostImportApi : OpenStringEnum<SocialAccountTypeBundleSocialPostImportApi>
{
    private SocialAccountTypeBundleSocialPostImportApi(string value) : base(value)
    {
    }

    public static readonly SocialAccountTypeBundleSocialPostImportApi Facebook = new("FACEBOOK");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Instagram = new("INSTAGRAM");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Threads = new("THREADS");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Tiktok = new("TIKTOK");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Youtube = new("YOUTUBE");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Linkedin = new("LINKEDIN");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Pinterest = new("PINTEREST");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Reddit = new("REDDIT");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Mastodon = new("MASTODON");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Bluesky = new("BLUESKY");

    public static readonly SocialAccountTypeBundleSocialPostImportApi Twitter = new("TWITTER");

    public TResult Match<TResult>(Func<TResult> onFacebook,
        Func<TResult> onInstagram,
        Func<TResult> onThreads,
        Func<TResult> onTiktok,
        Func<TResult> onYoutube,
        Func<TResult> onLinkedin,
        Func<TResult> onPinterest,
        Func<TResult> onReddit,
        Func<TResult> onMastodon,
        Func<TResult> onBluesky,
        Func<TResult> onTwitter,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Facebook => onFacebook(),
            _ when this == Instagram => onInstagram(),
            _ when this == Threads => onThreads(),
            _ when this == Tiktok => onTiktok(),
            _ when this == Youtube => onYoutube(),
            _ when this == Linkedin => onLinkedin(),
            _ when this == Pinterest => onPinterest(),
            _ when this == Reddit => onReddit(),
            _ when this == Mastodon => onMastodon(),
            _ when this == Bluesky => onBluesky(),
            _ when this == Twitter => onTwitter(),
            _ => otherwise(Value)
        };

    public void Match(Action onFacebook,
        Action onInstagram,
        Action onThreads,
        Action onTiktok,
        Action onYoutube,
        Action onLinkedin,
        Action onPinterest,
        Action onReddit,
        Action onMastodon,
        Action onBluesky,
        Action onTwitter,
        Action<string> otherwise)
    {
        if (this == Facebook) onFacebook();
        else if (this == Instagram) onInstagram();
        else if (this == Threads) onThreads();
        else if (this == Tiktok) onTiktok();
        else if (this == Youtube) onYoutube();
        else if (this == Linkedin) onLinkedin();
        else if (this == Pinterest) onPinterest();
        else if (this == Reddit) onReddit();
        else if (this == Mastodon) onMastodon();
        else if (this == Bluesky) onBluesky();
        else if (this == Twitter) onTwitter();
        else otherwise(Value);
    }
}
