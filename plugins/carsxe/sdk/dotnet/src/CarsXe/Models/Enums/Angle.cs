using System;
using System.Text.Json.Serialization;
using CarsXe.Core.Enum;

namespace CarsXe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Angle>))]
public sealed record Angle : OpenStringEnum<Angle>
{
    private Angle(string value) : base(value)
    {
    }

    public static readonly Angle Front = new("front");

    public static readonly Angle Side = new("side");

    public static readonly Angle Back = new("back");

    public TResult Match<TResult>(Func<TResult> onFront,
        Func<TResult> onSide,
        Func<TResult> onBack,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Front => onFront(),
            _ when this == Side => onSide(),
            _ when this == Back => onBack(),
            _ => otherwise(Value)
        };

    public void Match(Action onFront, Action onSide, Action onBack, Action<string> otherwise)
    {
        if (this == Front) onFront();
        else if (this == Side) onSide();
        else if (this == Back) onBack();
        else otherwise(Value);
    }
}
