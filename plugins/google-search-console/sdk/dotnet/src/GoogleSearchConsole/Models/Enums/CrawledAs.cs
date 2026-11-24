using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Primary crawler that was used by Google to crawl your site.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CrawledAs>))]
public sealed record CrawledAs : OpenStringEnum<CrawledAs>
{
    private CrawledAs(string value) : base(value)
    {
    }

    public static readonly CrawledAs CrawlingUserAgentUnspecified = new("CRAWLING_USER_AGENT_UNSPECIFIED");

    public static readonly CrawledAs Desktop = new("DESKTOP");

    public static readonly CrawledAs Mobile = new("MOBILE");

    public TResult Match<TResult>(Func<TResult> onCrawlingUserAgentUnspecified,
        Func<TResult> onDesktop,
        Func<TResult> onMobile,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CrawlingUserAgentUnspecified => onCrawlingUserAgentUnspecified(),
            _ when this == Desktop => onDesktop(),
            _ when this == Mobile => onMobile(),
            _ => otherwise(Value)
        };

    public void Match(Action onCrawlingUserAgentUnspecified,
        Action onDesktop,
        Action onMobile,
        Action<string> otherwise)
    {
        if (this == CrawlingUserAgentUnspecified) onCrawlingUserAgentUnspecified();
        else if (this == Desktop) onDesktop();
        else if (this == Mobile) onMobile();
        else otherwise(Value);
    }
}
