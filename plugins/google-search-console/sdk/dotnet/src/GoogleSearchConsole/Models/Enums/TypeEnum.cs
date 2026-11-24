using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Web = new("WEB");

    public static readonly TypeEnum Image = new("IMAGE");

    public static readonly TypeEnum Video = new("VIDEO");

    public static readonly TypeEnum News = new("NEWS");

    public static readonly TypeEnum Discover = new("DISCOVER");

    public static readonly TypeEnum GoogleNews = new("GOOGLE_NEWS");

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
