using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResolvedVia>))]
public sealed record ResolvedVia : OpenStringEnum<ResolvedVia>
{
    private ResolvedVia(string value) : base(value)
    {
    }

    public static readonly ResolvedVia Spotify = new("spotify");

    public static readonly ResolvedVia Apple = new("apple");

    public static readonly ResolvedVia Rss = new("rss");

    public static readonly ResolvedVia Direct = new("direct");

    public TResult Match<TResult>(Func<TResult> onSpotify,
        Func<TResult> onApple,
        Func<TResult> onRss,
        Func<TResult> onDirect,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Spotify => onSpotify(),
            _ when this == Apple => onApple(),
            _ when this == Rss => onRss(),
            _ when this == Direct => onDirect(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpotify, Action onApple, Action onRss, Action onDirect, Action<string> otherwise)
    {
        if (this == Spotify) onSpotify();
        else if (this == Apple) onApple();
        else if (this == Rss) onRss();
        else if (this == Direct) onDirect();
        else otherwise(Value);
    }
}
