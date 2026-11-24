using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

/// <summary>
/// Where to search: youtube (default), tiktok, instagram, spotify, apple, or rss. Every result's url is accepted by the transcript and batch endpoints as-is. rss searches the open podcast index via Apple's directory and returns episode audio (enclosure) URLs.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Platform1>))]
public sealed record Platform1 : OpenStringEnum<Platform1>
{
    private Platform1(string value) : base(value)
    {
    }

    public static readonly Platform1 Youtube = new("youtube");

    public static readonly Platform1 Tiktok = new("tiktok");

    public static readonly Platform1 Instagram = new("instagram");

    public static readonly Platform1 Spotify = new("spotify");

    public static readonly Platform1 Apple = new("apple");

    public static readonly Platform1 Rss = new("rss");

    public TResult Match<TResult>(Func<TResult> onYoutube,
        Func<TResult> onTiktok,
        Func<TResult> onInstagram,
        Func<TResult> onSpotify,
        Func<TResult> onApple,
        Func<TResult> onRss,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Youtube => onYoutube(),
            _ when this == Tiktok => onTiktok(),
            _ when this == Instagram => onInstagram(),
            _ when this == Spotify => onSpotify(),
            _ when this == Apple => onApple(),
            _ when this == Rss => onRss(),
            _ => otherwise(Value)
        };

    public void Match(Action onYoutube,
        Action onTiktok,
        Action onInstagram,
        Action onSpotify,
        Action onApple,
        Action onRss,
        Action<string> otherwise)
    {
        if (this == Youtube) onYoutube();
        else if (this == Tiktok) onTiktok();
        else if (this == Instagram) onInstagram();
        else if (this == Spotify) onSpotify();
        else if (this == Apple) onApple();
        else if (this == Rss) onRss();
        else otherwise(Value);
    }
}
