using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Required. The method by which Key Events will be counted across multiple events within a session.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CountingMethodGoogleAnalyticsPropertiesApi>))]
public sealed record CountingMethodGoogleAnalyticsPropertiesApi : OpenStringEnum<CountingMethodGoogleAnalyticsPropertiesApi>
{
    private CountingMethodGoogleAnalyticsPropertiesApi(string value) : base(value)
    {
    }

    public static readonly CountingMethodGoogleAnalyticsPropertiesApi CountingMethodUnspecified = new(
        "COUNTING_METHOD_UNSPECIFIED");

    public static readonly CountingMethodGoogleAnalyticsPropertiesApi OncePerEvent = new("ONCE_PER_EVENT");

    public static readonly CountingMethodGoogleAnalyticsPropertiesApi OncePerSession = new("ONCE_PER_SESSION");

    public TResult Match<TResult>(Func<TResult> onCountingMethodUnspecified,
        Func<TResult> onOncePerEvent,
        Func<TResult> onOncePerSession,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CountingMethodUnspecified => onCountingMethodUnspecified(),
            _ when this == OncePerEvent => onOncePerEvent(),
            _ when this == OncePerSession => onOncePerSession(),
            _ => otherwise(Value)
        };

    public void Match(Action onCountingMethodUnspecified,
        Action onOncePerEvent,
        Action onOncePerSession,
        Action<string> otherwise)
    {
        if (this == CountingMethodUnspecified) onCountingMethodUnspecified();
        else if (this == OncePerEvent) onOncePerEvent();
        else if (this == OncePerSession) onOncePerSession();
        else otherwise(Value);
    }
}
