using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// The type of monitor.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 EventStream = new("event_stream");

    public static readonly Type3 Snapshot = new("snapshot");

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
