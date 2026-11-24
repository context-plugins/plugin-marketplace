using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

/// <summary>
/// At most one per query. A time dimension yields a series; a breakdown dimension yields top-N rows. Not every metric is valid for every breakdown — a metric the builder does not compute returns <c>metric_not_available</c>. In addition to the enum below, a dynamic <c>event:props:&lt;key&gt;</c> dimension breaks a custom event down by one of its property values (metrics <c>visitors</c> + <c>events</c>); it requires an <c>event</c> filter to name the event, else <c>event_filter_required</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Dimension>))]
public sealed record Dimension : OpenStringEnum<Dimension>
{
    private Dimension(string value) : base(value)
    {
    }

    public static readonly Dimension Time = new("time");

    public static readonly Dimension TimeMinute = new("time:minute");

    public static readonly Dimension TimeHour = new("time:hour");

    public static readonly Dimension TimeDay = new("time:day");

    public static readonly Dimension TimeWeek = new("time:week");

    public static readonly Dimension TimeMonth = new("time:month");

    public static readonly Dimension VisitSource = new("visit:source");

    public static readonly Dimension VisitReferrer = new("visit:referrer");

    public static readonly Dimension VisitChannel = new("visit:channel");

    public static readonly Dimension VisitUtmSource = new("visit:utm_source");

    public static readonly Dimension VisitUtmMedium = new("visit:utm_medium");

    public static readonly Dimension VisitUtmCampaign = new("visit:utm_campaign");

    public static readonly Dimension VisitUtmContent = new("visit:utm_content");

    public static readonly Dimension VisitUtmTerm = new("visit:utm_term");

    public static readonly Dimension VisitCountry = new("visit:country");

    public static readonly Dimension VisitRegion = new("visit:region");

    public static readonly Dimension VisitCity = new("visit:city");

    public static readonly Dimension VisitBrowser = new("visit:browser");

    public static readonly Dimension VisitBrowserVersion = new("visit:browser_version");

    public static readonly Dimension VisitOs = new("visit:os");

    public static readonly Dimension VisitOsVersion = new("visit:os_version");

    public static readonly Dimension VisitDevice = new("visit:device");

    public static readonly Dimension VisitEntryPage = new("visit:entry_page");

    public static readonly Dimension VisitExitPage = new("visit:exit_page");

    public static readonly Dimension EventPage = new("event:page");

    public static readonly Dimension EventFolder = new("event:folder");

    public static readonly Dimension EventHostname = new("event:hostname");

    public static readonly Dimension EventName = new("event:name");

    public static readonly Dimension EventGoal = new("event:goal");

    public static readonly Dimension EventStatusCode = new("event:status_code");

    public TResult Match<TResult>(Func<TResult> onTime,
        Func<TResult> onTimeMinute,
        Func<TResult> onTimeHour,
        Func<TResult> onTimeDay,
        Func<TResult> onTimeWeek,
        Func<TResult> onTimeMonth,
        Func<TResult> onVisitSource,
        Func<TResult> onVisitReferrer,
        Func<TResult> onVisitChannel,
        Func<TResult> onVisitUtmSource,
        Func<TResult> onVisitUtmMedium,
        Func<TResult> onVisitUtmCampaign,
        Func<TResult> onVisitUtmContent,
        Func<TResult> onVisitUtmTerm,
        Func<TResult> onVisitCountry,
        Func<TResult> onVisitRegion,
        Func<TResult> onVisitCity,
        Func<TResult> onVisitBrowser,
        Func<TResult> onVisitBrowserVersion,
        Func<TResult> onVisitOs,
        Func<TResult> onVisitOsVersion,
        Func<TResult> onVisitDevice,
        Func<TResult> onVisitEntryPage,
        Func<TResult> onVisitExitPage,
        Func<TResult> onEventPage,
        Func<TResult> onEventFolder,
        Func<TResult> onEventHostname,
        Func<TResult> onEventName,
        Func<TResult> onEventGoal,
        Func<TResult> onEventStatusCode,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Time => onTime(),
            _ when this == TimeMinute => onTimeMinute(),
            _ when this == TimeHour => onTimeHour(),
            _ when this == TimeDay => onTimeDay(),
            _ when this == TimeWeek => onTimeWeek(),
            _ when this == TimeMonth => onTimeMonth(),
            _ when this == VisitSource => onVisitSource(),
            _ when this == VisitReferrer => onVisitReferrer(),
            _ when this == VisitChannel => onVisitChannel(),
            _ when this == VisitUtmSource => onVisitUtmSource(),
            _ when this == VisitUtmMedium => onVisitUtmMedium(),
            _ when this == VisitUtmCampaign => onVisitUtmCampaign(),
            _ when this == VisitUtmContent => onVisitUtmContent(),
            _ when this == VisitUtmTerm => onVisitUtmTerm(),
            _ when this == VisitCountry => onVisitCountry(),
            _ when this == VisitRegion => onVisitRegion(),
            _ when this == VisitCity => onVisitCity(),
            _ when this == VisitBrowser => onVisitBrowser(),
            _ when this == VisitBrowserVersion => onVisitBrowserVersion(),
            _ when this == VisitOs => onVisitOs(),
            _ when this == VisitOsVersion => onVisitOsVersion(),
            _ when this == VisitDevice => onVisitDevice(),
            _ when this == VisitEntryPage => onVisitEntryPage(),
            _ when this == VisitExitPage => onVisitExitPage(),
            _ when this == EventPage => onEventPage(),
            _ when this == EventFolder => onEventFolder(),
            _ when this == EventHostname => onEventHostname(),
            _ when this == EventName => onEventName(),
            _ when this == EventGoal => onEventGoal(),
            _ when this == EventStatusCode => onEventStatusCode(),
            _ => otherwise(Value)
        };

    public void Match(Action onTime,
        Action onTimeMinute,
        Action onTimeHour,
        Action onTimeDay,
        Action onTimeWeek,
        Action onTimeMonth,
        Action onVisitSource,
        Action onVisitReferrer,
        Action onVisitChannel,
        Action onVisitUtmSource,
        Action onVisitUtmMedium,
        Action onVisitUtmCampaign,
        Action onVisitUtmContent,
        Action onVisitUtmTerm,
        Action onVisitCountry,
        Action onVisitRegion,
        Action onVisitCity,
        Action onVisitBrowser,
        Action onVisitBrowserVersion,
        Action onVisitOs,
        Action onVisitOsVersion,
        Action onVisitDevice,
        Action onVisitEntryPage,
        Action onVisitExitPage,
        Action onEventPage,
        Action onEventFolder,
        Action onEventHostname,
        Action onEventName,
        Action onEventGoal,
        Action onEventStatusCode,
        Action<string> otherwise)
    {
        if (this == Time) onTime();
        else if (this == TimeMinute) onTimeMinute();
        else if (this == TimeHour) onTimeHour();
        else if (this == TimeDay) onTimeDay();
        else if (this == TimeWeek) onTimeWeek();
        else if (this == TimeMonth) onTimeMonth();
        else if (this == VisitSource) onVisitSource();
        else if (this == VisitReferrer) onVisitReferrer();
        else if (this == VisitChannel) onVisitChannel();
        else if (this == VisitUtmSource) onVisitUtmSource();
        else if (this == VisitUtmMedium) onVisitUtmMedium();
        else if (this == VisitUtmCampaign) onVisitUtmCampaign();
        else if (this == VisitUtmContent) onVisitUtmContent();
        else if (this == VisitUtmTerm) onVisitUtmTerm();
        else if (this == VisitCountry) onVisitCountry();
        else if (this == VisitRegion) onVisitRegion();
        else if (this == VisitCity) onVisitCity();
        else if (this == VisitBrowser) onVisitBrowser();
        else if (this == VisitBrowserVersion) onVisitBrowserVersion();
        else if (this == VisitOs) onVisitOs();
        else if (this == VisitOsVersion) onVisitOsVersion();
        else if (this == VisitDevice) onVisitDevice();
        else if (this == VisitEntryPage) onVisitEntryPage();
        else if (this == VisitExitPage) onVisitExitPage();
        else if (this == EventPage) onEventPage();
        else if (this == EventFolder) onEventFolder();
        else if (this == EventHostname) onEventHostname();
        else if (this == EventName) onEventName();
        else if (this == EventGoal) onEventGoal();
        else if (this == EventStatusCode) onEventStatusCode();
        else otherwise(Value);
    }
}
