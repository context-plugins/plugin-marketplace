using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SocialAccountType>))]
public sealed record SocialAccountType : OpenStringEnum<SocialAccountType>
{
    private SocialAccountType(string value) : base(value)
    {
    }

    public static readonly SocialAccountType Facebook = new("FACEBOOK");

    public static readonly SocialAccountType Instagram = new("INSTAGRAM");

    public static readonly SocialAccountType Linkedin = new("LINKEDIN");

    public static readonly SocialAccountType Youtube = new("YOUTUBE");

    public static readonly SocialAccountType Tiktok = new("TIKTOK");

    public static readonly SocialAccountType Reddit = new("REDDIT");

    public static readonly SocialAccountType Threads = new("THREADS");

    public static readonly SocialAccountType Mastodon = new("MASTODON");

    public static readonly SocialAccountType Bluesky = new("BLUESKY");

    public static readonly SocialAccountType Twitter = new("TWITTER");

    public TResult Match<TResult>(Func<TResult> onFacebook,
        Func<TResult> onInstagram,
        Func<TResult> onLinkedin,
        Func<TResult> onYoutube,
        Func<TResult> onTiktok,
        Func<TResult> onReddit,
        Func<TResult> onThreads,
        Func<TResult> onMastodon,
        Func<TResult> onBluesky,
        Func<TResult> onTwitter,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Facebook => onFacebook(),
            _ when this == Instagram => onInstagram(),
            _ when this == Linkedin => onLinkedin(),
            _ when this == Youtube => onYoutube(),
            _ when this == Tiktok => onTiktok(),
            _ when this == Reddit => onReddit(),
            _ when this == Threads => onThreads(),
            _ when this == Mastodon => onMastodon(),
            _ when this == Bluesky => onBluesky(),
            _ when this == Twitter => onTwitter(),
            _ => otherwise(Value)
        };

    public void Match(Action onFacebook,
        Action onInstagram,
        Action onLinkedin,
        Action onYoutube,
        Action onTiktok,
        Action onReddit,
        Action onThreads,
        Action onMastodon,
        Action onBluesky,
        Action onTwitter,
        Action<string> otherwise)
    {
        if (this == Facebook) onFacebook();
        else if (this == Instagram) onInstagram();
        else if (this == Linkedin) onLinkedin();
        else if (this == Youtube) onYoutube();
        else if (this == Tiktok) onTiktok();
        else if (this == Reddit) onReddit();
        else if (this == Threads) onThreads();
        else if (this == Mastodon) onMastodon();
        else if (this == Bluesky) onBluesky();
        else if (this == Twitter) onTwitter();
        else otherwise(Value);
    }
}
