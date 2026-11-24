using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Indicates whether the metric is optimized for increase or decreasae
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Optimize>))]
public sealed record Optimize : OpenStringEnum<Optimize>
{
    private Optimize(string value) : base(value)
    {
    }

    public static readonly Optimize Increase = new("increase");

    public static readonly Optimize Decrease = new("decrease");

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
