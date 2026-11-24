using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SocialAccountType1>))]
public sealed record SocialAccountType1 : OpenStringEnum<SocialAccountType1>
{
    private SocialAccountType1(string value) : base(value)
    {
    }

    public static readonly SocialAccountType1 Tiktok = new("TIKTOK");

    public static readonly SocialAccountType1 Youtube = new("YOUTUBE");

    public static readonly SocialAccountType1 Instagram = new("INSTAGRAM");

    public static readonly SocialAccountType1 Facebook = new("FACEBOOK");

    public static readonly SocialAccountType1 Twitter = new("TWITTER");

    public static readonly SocialAccountType1 Threads = new("THREADS");

    public static readonly SocialAccountType1 Linkedin = new("LINKEDIN");

    public static readonly SocialAccountType1 Reddit = new("REDDIT");

    public static readonly SocialAccountType1 Mastodon = new("MASTODON");

    public static readonly SocialAccountType1 Discord = new("DISCORD");

    public static readonly SocialAccountType1 Slack = new("SLACK");

    public static readonly SocialAccountType1 Bluesky = new("BLUESKY");

    public TResult Match<TResult>(Func<TResult> onTiktok,
        Func<TResult> onYoutube,
        Func<TResult> onInstagram,
        Func<TResult> onFacebook,
        Func<TResult> onTwitter,
        Func<TResult> onThreads,
        Func<TResult> onLinkedin,
        Func<TResult> onReddit,
        Func<TResult> onMastodon,
        Func<TResult> onDiscord,
        Func<TResult> onSlack,
        Func<TResult> onBluesky,
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
            _ when this == Reddit => onReddit(),
            _ when this == Mastodon => onMastodon(),
            _ when this == Discord => onDiscord(),
            _ when this == Slack => onSlack(),
            _ when this == Bluesky => onBluesky(),
            _ => otherwise(Value)
        };

    public void Match(Action onTiktok,
        Action onYoutube,
        Action onInstagram,
        Action onFacebook,
        Action onTwitter,
        Action onThreads,
        Action onLinkedin,
        Action onReddit,
        Action onMastodon,
        Action onDiscord,
        Action onSlack,
        Action onBluesky,
        Action<string> otherwise)
    {
        if (this == Tiktok) onTiktok();
        else if (this == Youtube) onYoutube();
        else if (this == Instagram) onInstagram();
        else if (this == Facebook) onFacebook();
        else if (this == Twitter) onTwitter();
        else if (this == Threads) onThreads();
        else if (this == Linkedin) onLinkedin();
        else if (this == Reddit) onReddit();
        else if (this == Mastodon) onMastodon();
        else if (this == Discord) onDiscord();
        else if (this == Slack) onSlack();
        else if (this == Bluesky) onBluesky();
        else otherwise(Value);
    }
}
