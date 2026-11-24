using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The type of event to retrieve analytics for. Defaults to 'clicks'.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventCodeqrIoEventsApi>))]
public sealed record EventCodeqrIoEventsApi : OpenStringEnum<EventCodeqrIoEventsApi>
{
    private EventCodeqrIoEventsApi(string value) : base(value)
    {
    }

    public static readonly EventCodeqrIoEventsApi Clicks = new("clicks");

    public static readonly EventCodeqrIoEventsApi Leads = new("leads");

    public static readonly EventCodeqrIoEventsApi Sales = new("sales");

    public static readonly EventCodeqrIoEventsApi Scans = new("scans");

    public static readonly EventCodeqrIoEventsApi Views = new("views");

    public TResult Match<TResult>(Func<TResult> onClicks,
        Func<TResult> onLeads,
        Func<TResult> onSales,
        Func<TResult> onScans,
        Func<TResult> onViews,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Clicks => onClicks(),
            _ when this == Leads => onLeads(),
            _ when this == Sales => onSales(),
            _ when this == Scans => onScans(),
            _ when this == Views => onViews(),
            _ => otherwise(Value)
        };

    public void Match(Action onClicks,
        Action onLeads,
        Action onSales,
        Action onScans,
        Action onViews,
        Action<string> otherwise)
    {
        if (this == Clicks) onClicks();
        else if (this == Leads) onLeads();
        else if (this == Sales) onSales();
        else if (this == Scans) onScans();
        else if (this == Views) onViews();
        else otherwise(Value);
    }
}
