using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Alignment for "powered by" text
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PoweredByAlignment>))]
public sealed record PoweredByAlignment : OpenStringEnum<PoweredByAlignment>
{
    private PoweredByAlignment(string value) : base(value)
    {
    }

    public static readonly PoweredByAlignment Left = new("left");

    public static readonly PoweredByAlignment Center = new("center");

    public static readonly PoweredByAlignment Right = new("right");

    public TResult Match<TResult>(Func<TResult> onLeft,
        Func<TResult> onCenter,
        Func<TResult> onRight,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Left => onLeft(),
            _ when this == Center => onCenter(),
            _ when this == Right => onRight(),
            _ => otherwise(Value)
        };

    public void Match(Action onLeft, Action onCenter, Action onRight, Action<string> otherwise)
    {
        if (this == Left) onLeft();
        else if (this == Center) onCenter();
        else if (this == Right) onRight();
        else otherwise(Value);
    }
}
