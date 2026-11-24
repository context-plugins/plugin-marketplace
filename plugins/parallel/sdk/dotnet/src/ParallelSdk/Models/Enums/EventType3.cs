using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Discriminant for the error event variant.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventType3>))]
public sealed record EventType3 : OpenStringEnum<EventType3>
{
    private EventType3(string value) : base(value)
    {
    }

    public static readonly EventType3 Error = new("error");

    public TResult Match<TResult>(Func<TResult> onError, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onError, Action<string> otherwise)
    {
        if (this == Error) onError();
        else otherwise(Value);
    }
}
