using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Type of monitor to create. <c>event_stream</c> monitors a search query for material changes; <c>snapshot</c> monitors a specific task run's output. Determines the expected shape of <c>settings</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2ParallelAiMonitorApi>))]
public sealed record Type2ParallelAiMonitorApi : OpenStringEnum<Type2ParallelAiMonitorApi>
{
    private Type2ParallelAiMonitorApi(string value) : base(value)
    {
    }

    public static readonly Type2ParallelAiMonitorApi EventStream = new("event_stream");

    public static readonly Type2ParallelAiMonitorApi Snapshot = new("snapshot");

    public TResult Match<TResult>(Func<TResult> onEventStream,
        Func<TResult> onSnapshot,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EventStream => onEventStream(),
            _ when this == Snapshot => onSnapshot(),
            _ => otherwise(Value)
        };

    public void Match(Action onEventStream, Action onSnapshot, Action<string> otherwise)
    {
        if (this == EventStream) onEventStream();
        else if (this == Snapshot) onSnapshot();
        else otherwise(Value);
    }
}
