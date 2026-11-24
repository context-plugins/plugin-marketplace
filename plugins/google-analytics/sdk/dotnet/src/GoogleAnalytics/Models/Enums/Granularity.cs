using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Required. The granularity used to interpret the <c>startOffset</c> and <c>endOffset</c> for the extended reporting date range for a cohort report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Granularity>))]
public sealed record Granularity : OpenStringEnum<Granularity>
{
    private Granularity(string value) : base(value)
    {
    }

    public static readonly Granularity GranularityUnspecified = new("GRANULARITY_UNSPECIFIED");

    public static readonly Granularity Daily = new("DAILY");

    public static readonly Granularity Weekly = new("WEEKLY");

    public static readonly Granularity Monthly = new("MONTHLY");

    public TResult Match<TResult>(Func<TResult> onGranularityUnspecified,
        Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onMonthly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GranularityUnspecified => onGranularityUnspecified(),
            _ when this == Daily => onDaily(),
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ => otherwise(Value)
        };

    public void Match(Action onGranularityUnspecified,
        Action onDaily,
        Action onWeekly,
        Action onMonthly,
        Action<string> otherwise)
    {
        if (this == GranularityUnspecified) onGranularityUnspecified();
        else if (this == Daily) onDaily();
        else if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else otherwise(Value);
    }
}
