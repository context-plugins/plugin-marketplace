using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PlatformBundleSocialCommentApi>))]
public sealed record PlatformBundleSocialCommentApi : OpenStringEnum<PlatformBundleSocialCommentApi>
{
    private PlatformBundleSocialCommentApi(string value) : base(value)
    {
    }

    public static readonly PlatformBundleSocialCommentApi Facebook = new("FACEBOOK");

    public static readonly PlatformBundleSocialCommentApi Instagram = new("INSTAGRAM");

    public static readonly PlatformBundleSocialCommentApi Linkedin = new("LINKEDIN");

    public static readonly PlatformBundleSocialCommentApi Youtube = new("YOUTUBE");

    public static readonly PlatformBundleSocialCommentApi Tiktok = new("TIKTOK");

    public static readonly PlatformBundleSocialCommentApi Reddit = new("REDDIT");

    public static readonly PlatformBundleSocialCommentApi Threads = new("THREADS");

    public static readonly PlatformBundleSocialCommentApi Mastodon = new("MASTODON");

    public static readonly PlatformBundleSocialCommentApi Bluesky = new("BLUESKY");

    public static readonly PlatformBundleSocialCommentApi Twitter = new("TWITTER");

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
