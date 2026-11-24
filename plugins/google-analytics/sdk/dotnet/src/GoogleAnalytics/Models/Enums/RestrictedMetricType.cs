using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RestrictedMetricType>))]
public sealed record RestrictedMetricType : OpenStringEnum<RestrictedMetricType>
{
    private RestrictedMetricType(string value) : base(value)
    {
    }

    public static readonly RestrictedMetricType RestrictedMetricTypeUnspecified = new(
        "RESTRICTED_METRIC_TYPE_UNSPECIFIED");

    public static readonly RestrictedMetricType CostData = new("COST_DATA");

    public static readonly RestrictedMetricType RevenueData = new("REVENUE_DATA");

    public TResult Match<TResult>(Func<TResult> onRestrictedMetricTypeUnspecified,
        Func<TResult> onCostData,
        Func<TResult> onRevenueData,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RestrictedMetricTypeUnspecified => onRestrictedMetricTypeUnspecified(),
            _ when this == CostData => onCostData(),
            _ when this == RevenueData => onRevenueData(),
            _ => otherwise(Value)
        };

    public void Match(Action onRestrictedMetricTypeUnspecified,
        Action onCostData,
        Action onRevenueData,
        Action<string> otherwise)
    {
        if (this == RestrictedMetricTypeUnspecified) onRestrictedMetricTypeUnspecified();
        else if (this == CostData) onCostData();
        else if (this == RevenueData) onRevenueData();
        else otherwise(Value);
    }
}
