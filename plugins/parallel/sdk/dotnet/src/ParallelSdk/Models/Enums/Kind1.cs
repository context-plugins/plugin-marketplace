using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind1>))]
public sealed record Kind1 : OpenStringEnum<Kind1>
{
    private Kind1(string value) : base(value)
    {
    }

    public static readonly Kind1 Task = new("task");

    public TResult Match<TResult>(Func<TResult> onTask, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Task => onTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onTask, Action<string> otherwise)
    {
        if (this == Task) onTask();
        else otherwise(Value);
    }
}
