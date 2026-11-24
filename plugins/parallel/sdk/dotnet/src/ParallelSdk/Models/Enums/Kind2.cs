using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind2>))]
public sealed record Kind2 : OpenStringEnum<Kind2>
{
    private Kind2(string value) : base(value)
    {
    }

    public static readonly Kind2 Monitor = new("monitor");

    public TResult Match<TResult>(Func<TResult> onMonitor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Monitor => onMonitor(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonitor, Action<string> otherwise)
    {
        if (this == Monitor) onMonitor();
        else otherwise(Value);
    }
}
