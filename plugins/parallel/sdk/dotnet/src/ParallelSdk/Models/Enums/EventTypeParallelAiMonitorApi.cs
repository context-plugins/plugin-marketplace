using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Discriminant for the event_stream event variant.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventTypeParallelAiMonitorApi>))]
public sealed record EventTypeParallelAiMonitorApi : OpenStringEnum<EventTypeParallelAiMonitorApi>
{
    private EventTypeParallelAiMonitorApi(string value) : base(value)
    {
    }

    public static readonly EventTypeParallelAiMonitorApi EventStream = new("event_stream");

    public TResult Match<TResult>(Func<TResult> onEventStream, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EventStream => onEventStream(),
            _ => otherwise(Value)
        };

    public void Match(Action onEventStream, Action<string> otherwise)
    {
        if (this == EventStream) onEventStream();
        else otherwise(Value);
    }
}
