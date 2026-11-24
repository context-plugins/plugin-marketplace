using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// The type of data truncation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataTruncationType>))]
public sealed record DataTruncationType : OpenStringEnum<DataTruncationType>
{
    private DataTruncationType(string value) : base(value)
    {
    }

    public static readonly DataTruncationType DataTruncationTypeUnspecified = new("DATA_TRUNCATION_TYPE_UNSPECIFIED");

    public static readonly DataTruncationType DataTruncationTypeRulesBasedModels = new(
        "DATA_TRUNCATION_TYPE_RULES_BASED_MODELS");

    public static readonly DataTruncationType DataTruncationTypeDataDrivenAttribution = new(
        "DATA_TRUNCATION_TYPE_DATA_DRIVEN_ATTRIBUTION");

    public static readonly DataTruncationType DataTruncationTypeDv360 = new("DATA_TRUNCATION_TYPE_DV360");

    public static readonly DataTruncationType DataTruncationTypeCm360 = new("DATA_TRUNCATION_TYPE_CM360");

    public static readonly DataTruncationType DataTruncationTypeItemScopedEcommerceMetrics = new(
        "DATA_TRUNCATION_TYPE_ITEM_SCOPED_ECOMMERCE_METRICS");

    public static readonly DataTruncationType DataTruncationTypeEventScopedEcommerceMetrics = new(
        "DATA_TRUNCATION_TYPE_EVENT_SCOPED_ECOMMERCE_METRICS");

    public static readonly DataTruncationType DataTruncationTypeDateRange = new("DATA_TRUNCATION_TYPE_DATE_RANGE");

    public static readonly DataTruncationType DataTruncationTypeProperty = new("DATA_TRUNCATION_TYPE_PROPERTY");

    public static readonly DataTruncationType DataTruncationTypeConversions = new("DATA_TRUNCATION_TYPE_CONVERSIONS");

    public static readonly DataTruncationType DataTruncationTypeGoogleAds = new("DATA_TRUNCATION_TYPE_GOOGLE_ADS");

    public TResult Match<TResult>(Func<TResult> onDataTruncationTypeUnspecified,
        Func<TResult> onDataTruncationTypeRulesBasedModels,
        Func<TResult> onDataTruncationTypeDataDrivenAttribution,
        Func<TResult> onDataTruncationTypeDv360,
        Func<TResult> onDataTruncationTypeCm360,
        Func<TResult> onDataTruncationTypeItemScopedEcommerceMetrics,
        Func<TResult> onDataTruncationTypeEventScopedEcommerceMetrics,
        Func<TResult> onDataTruncationTypeDateRange,
        Func<TResult> onDataTruncationTypeProperty,
        Func<TResult> onDataTruncationTypeConversions,
        Func<TResult> onDataTruncationTypeGoogleAds,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DataTruncationTypeUnspecified => onDataTruncationTypeUnspecified(),
            _ when this == DataTruncationTypeRulesBasedModels => onDataTruncationTypeRulesBasedModels(),
            _ when this == DataTruncationTypeDataDrivenAttribution => onDataTruncationTypeDataDrivenAttribution(),
            _ when this == DataTruncationTypeDv360 => onDataTruncationTypeDv360(),
            _ when this == DataTruncationTypeCm360 => onDataTruncationTypeCm360(),
            _ when this ==
                DataTruncationTypeItemScopedEcommerceMetrics => onDataTruncationTypeItemScopedEcommerceMetrics(),
            _ when this ==
                DataTruncationTypeEventScopedEcommerceMetrics => onDataTruncationTypeEventScopedEcommerceMetrics(),
            _ when this == DataTruncationTypeDateRange => onDataTruncationTypeDateRange(),
            _ when this == DataTruncationTypeProperty => onDataTruncationTypeProperty(),
            _ when this == DataTruncationTypeConversions => onDataTruncationTypeConversions(),
            _ when this == DataTruncationTypeGoogleAds => onDataTruncationTypeGoogleAds(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataTruncationTypeUnspecified,
        Action onDataTruncationTypeRulesBasedModels,
        Action onDataTruncationTypeDataDrivenAttribution,
        Action onDataTruncationTypeDv360,
        Action onDataTruncationTypeCm360,
        Action onDataTruncationTypeItemScopedEcommerceMetrics,
        Action onDataTruncationTypeEventScopedEcommerceMetrics,
        Action onDataTruncationTypeDateRange,
        Action onDataTruncationTypeProperty,
        Action onDataTruncationTypeConversions,
        Action onDataTruncationTypeGoogleAds,
        Action<string> otherwise)
    {
        if (this == DataTruncationTypeUnspecified) onDataTruncationTypeUnspecified();
        else if (this == DataTruncationTypeRulesBasedModels) onDataTruncationTypeRulesBasedModels();
        else if (this == DataTruncationTypeDataDrivenAttribution) onDataTruncationTypeDataDrivenAttribution();
        else if (this == DataTruncationTypeDv360) onDataTruncationTypeDv360();
        else if (this == DataTruncationTypeCm360) onDataTruncationTypeCm360();
        else if (this == DataTruncationTypeItemScopedEcommerceMetrics) onDataTruncationTypeItemScopedEcommerceMetrics();
        else if (this ==
            DataTruncationTypeEventScopedEcommerceMetrics) onDataTruncationTypeEventScopedEcommerceMetrics();
        else if (this == DataTruncationTypeDateRange) onDataTruncationTypeDateRange();
        else if (this == DataTruncationTypeProperty) onDataTruncationTypeProperty();
        else if (this == DataTruncationTypeConversions) onDataTruncationTypeConversions();
        else if (this == DataTruncationTypeGoogleAds) onDataTruncationTypeGoogleAds();
        else otherwise(Value);
    }
}
