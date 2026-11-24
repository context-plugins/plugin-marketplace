using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Optional. The method by which conversions will be counted across multiple events within a session. If this value is not provided, it will be set to <c>ONCE_PER_EVENT</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CountingMethod>))]
public sealed record CountingMethod : OpenStringEnum<CountingMethod>
{
    private CountingMethod(string value) : base(value)
    {
    }

    public static readonly CountingMethod ConversionCountingMethodUnspecified = new(
        "CONVERSION_COUNTING_METHOD_UNSPECIFIED");

    public static readonly CountingMethod OncePerEvent = new("ONCE_PER_EVENT");

    public static readonly CountingMethod OncePerSession = new("ONCE_PER_SESSION");

    public TResult Match<TResult>(Func<TResult> onConversionCountingMethodUnspecified,
        Func<TResult> onOncePerEvent,
        Func<TResult> onOncePerSession,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConversionCountingMethodUnspecified => onConversionCountingMethodUnspecified(),
            _ when this == OncePerEvent => onOncePerEvent(),
            _ when this == OncePerSession => onOncePerSession(),
            _ => otherwise(Value)
        };

    public void Match(Action onConversionCountingMethodUnspecified,
        Action onOncePerEvent,
        Action onOncePerSession,
        Action<string> otherwise)
    {
        if (this == ConversionCountingMethodUnspecified) onConversionCountingMethodUnspecified();
        else if (this == OncePerEvent) onOncePerEvent();
        else if (this == OncePerSession) onOncePerSession();
        else otherwise(Value);
    }
}
