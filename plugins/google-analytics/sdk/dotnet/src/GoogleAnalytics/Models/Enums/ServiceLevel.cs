using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Output only. The Google Analytics service level that applies to this property.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ServiceLevel>))]
public sealed record ServiceLevel : OpenStringEnum<ServiceLevel>
{
    private ServiceLevel(string value) : base(value)
    {
    }

    public static readonly ServiceLevel ServiceLevelUnspecified = new("SERVICE_LEVEL_UNSPECIFIED");

    public static readonly ServiceLevel GoogleAnalyticsStandard = new("GOOGLE_ANALYTICS_STANDARD");

    public static readonly ServiceLevel GoogleAnalytics360 = new("GOOGLE_ANALYTICS_360");

    public TResult Match<TResult>(Func<TResult> onServiceLevelUnspecified,
        Func<TResult> onGoogleAnalyticsStandard,
        Func<TResult> onGoogleAnalytics360,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ServiceLevelUnspecified => onServiceLevelUnspecified(),
            _ when this == GoogleAnalyticsStandard => onGoogleAnalyticsStandard(),
            _ when this == GoogleAnalytics360 => onGoogleAnalytics360(),
            _ => otherwise(Value)
        };

    public void Match(Action onServiceLevelUnspecified,
        Action onGoogleAnalyticsStandard,
        Action onGoogleAnalytics360,
        Action<string> otherwise)
    {
        if (this == ServiceLevelUnspecified) onServiceLevelUnspecified();
        else if (this == GoogleAnalyticsStandard) onGoogleAnalyticsStandard();
        else if (this == GoogleAnalytics360) onGoogleAnalytics360();
        else otherwise(Value);
    }
}
