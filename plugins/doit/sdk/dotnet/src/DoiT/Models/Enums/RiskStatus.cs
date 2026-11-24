using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Server-computed risk classification, based on current utilization and forecasted breach date relative to the configured amount and current period end.
/// "atRisk" - the budget has already exceeded its configured amount, or its forecast projects it will before the current period ends.
/// "onTrack" - the budget has forecast data and is neither over budget nor projected to breach.
/// "unknown" - no forecast data is available yet, the budget is a fixed budget whose period has already expired, or the budget is invalid/draft.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RiskStatus>))]
public sealed record RiskStatus : OpenStringEnum<RiskStatus>
{
    private RiskStatus(string value) : base(value)
    {
    }

    public static readonly RiskStatus AtRisk = new("atRisk");

    public static readonly RiskStatus OnTrack = new("onTrack");

    public static readonly RiskStatus Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onAtRisk,
        Func<TResult> onOnTrack,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AtRisk => onAtRisk(),
            _ when this == OnTrack => onOnTrack(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onAtRisk, Action onOnTrack, Action onUnknown, Action<string> otherwise)
    {
        if (this == AtRisk) onAtRisk();
        else if (this == OnTrack) onOnTrack();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
