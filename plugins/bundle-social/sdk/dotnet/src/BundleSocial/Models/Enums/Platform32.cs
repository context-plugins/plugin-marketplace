using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Platform32>))]
public sealed record Platform32 : OpenStringEnum<Platform32>
{
    private Platform32(string value) : base(value)
    {
    }

    public static readonly Platform32 Facebook = new("FACEBOOK");

    public static readonly Platform32 Instagram = new("INSTAGRAM");

    public static readonly Platform32 Linkedin = new("LINKEDIN");

    public static readonly Platform32 Youtube = new("YOUTUBE");

    public static readonly Platform32 Tiktok = new("TIKTOK");

    public static readonly Platform32 Reddit = new("REDDIT");

    public static readonly Platform32 Threads = new("THREADS");

    public static readonly Platform32 Mastodon = new("MASTODON");

    public static readonly Platform32 Bluesky = new("BLUESKY");

    public static readonly Platform32 Twitter = new("TWITTER");

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
