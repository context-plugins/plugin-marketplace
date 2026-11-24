using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// Query trace summaries by TraceId (trace start time), Event (trace update time), or Service (trace segment end time).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeRangeType>))]
public sealed record TimeRangeType : OpenStringEnum<TimeRangeType>
{
    private TimeRangeType(string value) : base(value)
    {
    }

    public static readonly TimeRangeType TraceId = new("TraceId");

    public static readonly TimeRangeType Event = new("Event");

    public static readonly TimeRangeType Service = new("Service");

    public TResult Match<TResult>(Func<TResult> onTraceId,
        Func<TResult> onEvent,
        Func<TResult> onService,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TraceId => onTraceId(),
            _ when this == Event => onEvent(),
            _ when this == Service => onService(),
            _ => otherwise(Value)
        };

    public void Match(Action onTraceId, Action onEvent, Action onService, Action<string> otherwise)
    {
        if (this == TraceId) onTraceId();
        else if (this == Event) onEvent();
        else if (this == Service) onService();
        else otherwise(Value);
    }
}
