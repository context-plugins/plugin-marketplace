using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// [Optional; Default is \"web\"] The search type to filter for.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SearchType>))]
public sealed record SearchType : OpenStringEnum<SearchType>
{
    private SearchType(string value) : base(value)
    {
    }

    public static readonly SearchType Web = new("WEB");

    public static readonly SearchType Image = new("IMAGE");

    public static readonly SearchType Video = new("VIDEO");

    public static readonly SearchType News = new("NEWS");

    public static readonly SearchType Discover = new("DISCOVER");

    public static readonly SearchType GoogleNews = new("GOOGLE_NEWS");

    public TResult Match<TResult>(Func<TResult> onWeb,
        Func<TResult> onImage,
        Func<TResult> onVideo,
        Func<TResult> onNews,
        Func<TResult> onDiscover,
        Func<TResult> onGoogleNews,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Web => onWeb(),
            _ when this == Image => onImage(),
            _ when this == Video => onVideo(),
            _ when this == News => onNews(),
            _ when this == Discover => onDiscover(),
            _ when this == GoogleNews => onGoogleNews(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeb,
        Action onImage,
        Action onVideo,
        Action onNews,
        Action onDiscover,
        Action onGoogleNews,
        Action<string> otherwise)
    {
        if (this == Web) onWeb();
        else if (this == Image) onImage();
        else if (this == Video) onVideo();
        else if (this == News) onNews();
        else if (this == Discover) onDiscover();
        else if (this == GoogleNews) onGoogleNews();
        else otherwise(Value);
    }
}
