using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Active = new("active");

    public static readonly Status1 Cancelled = new("cancelled");

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
