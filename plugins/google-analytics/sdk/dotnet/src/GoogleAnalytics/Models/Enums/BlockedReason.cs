using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BlockedReason>))]
public sealed record BlockedReason : OpenStringEnum<BlockedReason>
{
    private BlockedReason(string value) : base(value)
    {
    }

    public static readonly BlockedReason BlockedReasonUnspecified = new("BLOCKED_REASON_UNSPECIFIED");

    public static readonly BlockedReason NoRevenueMetrics = new("NO_REVENUE_METRICS");

    public static readonly BlockedReason NoCostMetrics = new("NO_COST_METRICS");

    public TResult Match<TResult>(Func<TResult> onBlockedReasonUnspecified,
        Func<TResult> onNoRevenueMetrics,
        Func<TResult> onNoCostMetrics,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BlockedReasonUnspecified => onBlockedReasonUnspecified(),
            _ when this == NoRevenueMetrics => onNoRevenueMetrics(),
            _ when this == NoCostMetrics => onNoCostMetrics(),
            _ => otherwise(Value)
        };

    public void Match(Action onBlockedReasonUnspecified,
        Action onNoRevenueMetrics,
        Action onNoCostMetrics,
        Action<string> otherwise)
    {
        if (this == BlockedReasonUnspecified) onBlockedReasonUnspecified();
        else if (this == NoRevenueMetrics) onNoRevenueMetrics();
        else if (this == NoCostMetrics) onNoCostMetrics();
        else otherwise(Value);
    }
}
