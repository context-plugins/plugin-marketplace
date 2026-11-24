using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Discriminant for the snapshot event variant.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventType1>))]
public sealed record EventType1 : OpenStringEnum<EventType1>
{
    private EventType1(string value) : base(value)
    {
    }

    public static readonly EventType1 Snapshot = new("snapshot");

    public TResult Match<TResult>(Func<TResult> onSnapshot, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Snapshot => onSnapshot(),
            _ => otherwise(Value)
        };

    public void Match(Action onSnapshot, Action<string> otherwise)
    {
        if (this == Snapshot) onSnapshot();
        else otherwise(Value);
    }
}
