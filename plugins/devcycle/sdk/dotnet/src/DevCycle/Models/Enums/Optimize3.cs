using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Optimize3>))]
public sealed record Optimize3 : OpenStringEnum<Optimize3>
{
    private Optimize3(string value) : base(value)
    {
    }

    public static readonly Optimize3 Increase = new("increase");

    public static readonly Optimize3 Decrease = new("decrease");

    public TResult Match<TResult>(Func<TResult> onIncrease,
        Func<TResult> onDecrease,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Increase => onIncrease(),
            _ when this == Decrease => onDecrease(),
            _ => otherwise(Value)
        };

    public void Match(Action onIncrease, Action onDecrease, Action<string> otherwise)
    {
        if (this == Increase) onIncrease();
        else if (this == Decrease) onDecrease();
        else otherwise(Value);
    }
}
