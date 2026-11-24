using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// The type of the sitemap. For example: <c>rssFeed</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeGoogleSearchConsoleSitemapsApi>))]
public sealed record TypeGoogleSearchConsoleSitemapsApi : OpenStringEnum<TypeGoogleSearchConsoleSitemapsApi>
{
    private TypeGoogleSearchConsoleSitemapsApi(string value) : base(value)
    {
    }

    public static readonly TypeGoogleSearchConsoleSitemapsApi NotSitemap = new("NOT_SITEMAP");

    public static readonly TypeGoogleSearchConsoleSitemapsApi UrlList = new("URL_LIST");

    public static readonly TypeGoogleSearchConsoleSitemapsApi Sitemap = new("SITEMAP");

    public static readonly TypeGoogleSearchConsoleSitemapsApi RssFeed = new("RSS_FEED");

    public static readonly TypeGoogleSearchConsoleSitemapsApi AtomFeed = new("ATOM_FEED");

    public static readonly TypeGoogleSearchConsoleSitemapsApi PatternSitemap = new("PATTERN_SITEMAP");

    public static readonly TypeGoogleSearchConsoleSitemapsApi Oceanfront = new("OCEANFRONT");

    public TResult Match<TResult>(Func<TResult> onNotSitemap,
        Func<TResult> onUrlList,
        Func<TResult> onSitemap,
        Func<TResult> onRssFeed,
        Func<TResult> onAtomFeed,
        Func<TResult> onPatternSitemap,
        Func<TResult> onOceanfront,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotSitemap => onNotSitemap(),
            _ when this == UrlList => onUrlList(),
            _ when this == Sitemap => onSitemap(),
            _ when this == RssFeed => onRssFeed(),
            _ when this == AtomFeed => onAtomFeed(),
            _ when this == PatternSitemap => onPatternSitemap(),
            _ when this == Oceanfront => onOceanfront(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotSitemap,
        Action onUrlList,
        Action onSitemap,
        Action onRssFeed,
        Action onAtomFeed,
        Action onPatternSitemap,
        Action onOceanfront,
        Action<string> otherwise)
    {
        if (this == NotSitemap) onNotSitemap();
        else if (this == UrlList) onUrlList();
        else if (this == Sitemap) onSitemap();
        else if (this == RssFeed) onRssFeed();
        else if (this == AtomFeed) onAtomFeed();
        else if (this == PatternSitemap) onPatternSitemap();
        else if (this == Oceanfront) onOceanfront();
        else otherwise(Value);
    }
}
