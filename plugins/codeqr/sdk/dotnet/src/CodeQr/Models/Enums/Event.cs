using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The type of event to retrieve analytics for. Defaults to 'analytics'.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event Clicks = new("clicks");

    public static readonly Event Leads = new("leads");

    public static readonly Event Sales = new("sales");

    public static readonly Event Scans = new("scans");

    public static readonly Event Views = new("views");

    public static readonly Event Composite = new("composite");

    public TResult Match<TResult>(Func<TResult> onClicks,
        Func<TResult> onLeads,
        Func<TResult> onSales,
        Func<TResult> onScans,
        Func<TResult> onViews,
        Func<TResult> onComposite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Clicks => onClicks(),
            _ when this == Leads => onLeads(),
            _ when this == Sales => onSales(),
            _ when this == Scans => onScans(),
            _ when this == Views => onViews(),
            _ when this == Composite => onComposite(),
            _ => otherwise(Value)
        };

    public void Match(Action onClicks,
        Action onLeads,
        Action onSales,
        Action onScans,
        Action onViews,
        Action onComposite,
        Action<string> otherwise)
    {
        if (this == Clicks) onClicks();
        else if (this == Leads) onLeads();
        else if (this == Sales) onSales();
        else if (this == Scans) onScans();
        else if (this == Views) onViews();
        else if (this == Composite) onComposite();
        else otherwise(Value);
    }
}
