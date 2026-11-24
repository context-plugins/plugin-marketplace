using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Discriminant for the completion event variant.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventType2>))]
public sealed record EventType2 : OpenStringEnum<EventType2>
{
    private EventType2(string value) : base(value)
    {
    }

    public static readonly EventType2 Completion = new("completion");

    public TResult Match<TResult>(Func<TResult> onCompletion, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completion => onCompletion(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompletion, Action<string> otherwise)
    {
        if (this == Completion) onCompletion();
        else otherwise(Value);
    }
}
