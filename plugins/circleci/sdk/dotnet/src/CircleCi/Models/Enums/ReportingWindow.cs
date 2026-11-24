using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReportingWindow>))]
public sealed record ReportingWindow : OpenStringEnum<ReportingWindow>
{
    private ReportingWindow(string value) : base(value)
    {
    }

    public static readonly ReportingWindow Last7Days = new("last-7-days");

    public static readonly ReportingWindow Last30Days = new("last-30-days");

    public static readonly ReportingWindow Last60Days = new("last-60-days");

    public static readonly ReportingWindow Last90Days = new("last-90-days");

    public TResult Match<TResult>(Func<TResult> onLast7Days,
        Func<TResult> onLast30Days,
        Func<TResult> onLast60Days,
        Func<TResult> onLast90Days,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Last7Days => onLast7Days(),
            _ when this == Last30Days => onLast30Days(),
            _ when this == Last60Days => onLast60Days(),
            _ when this == Last90Days => onLast90Days(),
            _ => otherwise(Value)
        };

    public void Match(Action onLast7Days,
        Action onLast30Days,
        Action onLast60Days,
        Action onLast90Days,
        Action<string> otherwise)
    {
        if (this == Last7Days) onLast7Days();
        else if (this == Last30Days) onLast30Days();
        else if (this == Last60Days) onLast60Days();
        else if (this == Last90Days) onLast90Days();
        else otherwise(Value);
    }
}
