using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// The specific type of content in this sitemap. For example: <c>web</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Web = new("WEB");

    public static readonly Type1 Image = new("IMAGE");

    public static readonly Type1 Video = new("VIDEO");

    public static readonly Type1 News = new("NEWS");

    public static readonly Type1 Mobile = new("MOBILE");

    public static readonly Type1 AndroidApp = new("ANDROID_APP");

    public static readonly Type1 Pattern = new("PATTERN");

    public static readonly Type1 IosApp = new("IOS_APP");

    public static readonly Type1 DataFeedElement = new("DATA_FEED_ELEMENT");

    public TResult Match<TResult>(Func<TResult> onWeb,
        Func<TResult> onImage,
        Func<TResult> onVideo,
        Func<TResult> onNews,
        Func<TResult> onMobile,
        Func<TResult> onAndroidApp,
        Func<TResult> onPattern,
        Func<TResult> onIosApp,
        Func<TResult> onDataFeedElement,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Web => onWeb(),
            _ when this == Image => onImage(),
            _ when this == Video => onVideo(),
            _ when this == News => onNews(),
            _ when this == Mobile => onMobile(),
            _ when this == AndroidApp => onAndroidApp(),
            _ when this == Pattern => onPattern(),
            _ when this == IosApp => onIosApp(),
            _ when this == DataFeedElement => onDataFeedElement(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeb,
        Action onImage,
        Action onVideo,
        Action onNews,
        Action onMobile,
        Action onAndroidApp,
        Action onPattern,
        Action onIosApp,
        Action onDataFeedElement,
        Action<string> otherwise)
    {
        if (this == Web) onWeb();
        else if (this == Image) onImage();
        else if (this == Video) onVideo();
        else if (this == News) onNews();
        else if (this == Mobile) onMobile();
        else if (this == AndroidApp) onAndroidApp();
        else if (this == Pattern) onPattern();
        else if (this == IosApp) onIosApp();
        else if (this == DataFeedElement) onDataFeedElement();
        else otherwise(Value);
    }
}
