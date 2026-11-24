using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

/// <summary>
/// Where the rows came from: the <c>platform</c> field on search, the platform detected from the URL on channel and playlist.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Platform>))]
public sealed record Platform : OpenStringEnum<Platform>
{
    private Platform(string value) : base(value)
    {
    }

    public static readonly Platform Youtube = new("youtube");

    public static readonly Platform Tiktok = new("tiktok");

    public static readonly Platform Instagram = new("instagram");

    public static readonly Platform Spotify = new("spotify");

    public static readonly Platform Apple = new("apple");

    public static readonly Platform Rss = new("rss");

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
