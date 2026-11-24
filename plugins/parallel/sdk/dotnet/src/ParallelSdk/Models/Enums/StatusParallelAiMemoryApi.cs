using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Current status of the monitor.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusParallelAiMemoryApi>))]
public sealed record StatusParallelAiMemoryApi : OpenStringEnum<StatusParallelAiMemoryApi>
{
    private StatusParallelAiMemoryApi(string value) : base(value)
    {
    }

    public static readonly StatusParallelAiMemoryApi Active = new("active");

    public static readonly StatusParallelAiMemoryApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onCancelled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onCancelled, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
