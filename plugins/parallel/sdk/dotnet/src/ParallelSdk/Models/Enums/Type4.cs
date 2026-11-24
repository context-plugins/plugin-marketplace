using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type4>))]
public sealed record Type4 : OpenStringEnum<Type4>
{
    private Type4(string value) : base(value)
    {
    }

    public static readonly Type4 EventStream = new("event_stream");

    public static readonly Type4 Snapshot = new("snapshot");

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
