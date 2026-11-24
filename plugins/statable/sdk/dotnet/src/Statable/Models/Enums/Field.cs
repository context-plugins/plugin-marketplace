using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

/// <summary>
/// Field name WITHOUT the visit:/event: prefix. Geo fields take codes, not names (country/region = ISO/subdivision codes, city = numeric geoname_id — the values geo breakdowns return). The <c>event</c> field filters by a custom event name (an <c>event:name</c> breakdown value) and restricts the whole query to that event's sessions; it accepts ONLY operator <c>is</c> with a single non-standard value (not <c>pageview</c> / <c>engagement</c>) — other forms return <c>invalid_filter</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Field>))]
public sealed record Field : OpenStringEnum<Field>
{
    private Field(string value) : base(value)
    {
    }

    public static readonly Field Browser = new("browser");

    public static readonly Field BrowserVersion = new("browser_version");

    public static readonly Field Os = new("os");

    public static readonly Field OsVersion = new("os_version");

    public static readonly Field Device = new("device");

    public static readonly Field Country = new("country");

    public static readonly Field City = new("city");

    public static readonly Field Region = new("region");

    public static readonly Field Hostname = new("hostname");

    public static readonly Field UtmSource = new("utm_source");

    public static readonly Field UtmMedium = new("utm_medium");

    public static readonly Field UtmCampaign = new("utm_campaign");

    public static readonly Field UtmContent = new("utm_content");

    public static readonly Field UtmTerm = new("utm_term");

    public static readonly Field EntryPage = new("entry_page");

    public static readonly Field ExitPage = new("exit_page");

    public static readonly Field Source = new("source");

    public static readonly Field Channel = new("channel");

    public static readonly Field Referrer = new("referrer");

    public static readonly Field Page = new("page");

    public static readonly Field Code = new("code");

    public static readonly Field Event = new("event");

    public TResult Match<TResult>(Func<TResult> onBrowser,
        Func<TResult> onBrowserVersion,
        Func<TResult> onOs,
        Func<TResult> onOsVersion,
        Func<TResult> onDevice,
        Func<TResult> onCountry,
        Func<TResult> onCity,
        Func<TResult> onRegion,
        Func<TResult> onHostname,
        Func<TResult> onUtmSource,
        Func<TResult> onUtmMedium,
        Func<TResult> onUtmCampaign,
        Func<TResult> onUtmContent,
        Func<TResult> onUtmTerm,
        Func<TResult> onEntryPage,
        Func<TResult> onExitPage,
        Func<TResult> onSource,
        Func<TResult> onChannel,
        Func<TResult> onReferrer,
        Func<TResult> onPage,
        Func<TResult> onCode,
        Func<TResult> onEvent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Browser => onBrowser(),
            _ when this == BrowserVersion => onBrowserVersion(),
            _ when this == Os => onOs(),
            _ when this == OsVersion => onOsVersion(),
            _ when this == Device => onDevice(),
            _ when this == Country => onCountry(),
            _ when this == City => onCity(),
            _ when this == Region => onRegion(),
            _ when this == Hostname => onHostname(),
            _ when this == UtmSource => onUtmSource(),
            _ when this == UtmMedium => onUtmMedium(),
            _ when this == UtmCampaign => onUtmCampaign(),
            _ when this == UtmContent => onUtmContent(),
            _ when this == UtmTerm => onUtmTerm(),
            _ when this == EntryPage => onEntryPage(),
            _ when this == ExitPage => onExitPage(),
            _ when this == Source => onSource(),
            _ when this == Channel => onChannel(),
            _ when this == Referrer => onReferrer(),
            _ when this == Page => onPage(),
            _ when this == Code => onCode(),
            _ when this == Event => onEvent(),
            _ => otherwise(Value)
        };

    public void Match(Action onBrowser,
        Action onBrowserVersion,
        Action onOs,
        Action onOsVersion,
        Action onDevice,
        Action onCountry,
        Action onCity,
        Action onRegion,
        Action onHostname,
        Action onUtmSource,
        Action onUtmMedium,
        Action onUtmCampaign,
        Action onUtmContent,
        Action onUtmTerm,
        Action onEntryPage,
        Action onExitPage,
        Action onSource,
        Action onChannel,
        Action onReferrer,
        Action onPage,
        Action onCode,
        Action onEvent,
        Action<string> otherwise)
    {
        if (this == Browser) onBrowser();
        else if (this == BrowserVersion) onBrowserVersion();
        else if (this == Os) onOs();
        else if (this == OsVersion) onOsVersion();
        else if (this == Device) onDevice();
        else if (this == Country) onCountry();
        else if (this == City) onCity();
        else if (this == Region) onRegion();
        else if (this == Hostname) onHostname();
        else if (this == UtmSource) onUtmSource();
        else if (this == UtmMedium) onUtmMedium();
        else if (this == UtmCampaign) onUtmCampaign();
        else if (this == UtmContent) onUtmContent();
        else if (this == UtmTerm) onUtmTerm();
        else if (this == EntryPage) onEntryPage();
        else if (this == ExitPage) onExitPage();
        else if (this == Source) onSource();
        else if (this == Channel) onChannel();
        else if (this == Referrer) onReferrer();
        else if (this == Page) onPage();
        else if (this == Code) onCode();
        else if (this == Event) onEvent();
        else otherwise(Value);
    }
}
