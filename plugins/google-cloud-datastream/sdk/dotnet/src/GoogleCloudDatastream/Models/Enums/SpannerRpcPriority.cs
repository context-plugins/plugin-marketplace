using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// Optional. The RPC priority to use for the stream.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpannerRpcPriority>))]
public sealed record SpannerRpcPriority : OpenStringEnum<SpannerRpcPriority>
{
    private SpannerRpcPriority(string value) : base(value)
    {
    }

    public static readonly SpannerRpcPriority SpannerRpcPriorityUnspecified = new("SPANNER_RPC_PRIORITY_UNSPECIFIED");

    public static readonly SpannerRpcPriority Low = new("LOW");

    public static readonly SpannerRpcPriority Medium = new("MEDIUM");

    public static readonly SpannerRpcPriority High = new("HIGH");

    public TResult Match<TResult>(Func<TResult> onSpannerRpcPriorityUnspecified,
        Func<TResult> onLow,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SpannerRpcPriorityUnspecified => onSpannerRpcPriorityUnspecified(),
            _ when this == Low => onLow(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpannerRpcPriorityUnspecified,
        Action onLow,
        Action onMedium,
        Action onHigh,
        Action<string> otherwise)
    {
        if (this == SpannerRpcPriorityUnspecified) onSpannerRpcPriorityUnspecified();
        else if (this == Low) onLow();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else otherwise(Value);
    }
}
