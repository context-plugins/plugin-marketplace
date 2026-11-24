using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Standard = new("standard");

    public static readonly Type1 _2Up = new("2up");

    public static readonly Type1 Dutching = new("dutching");

    public static readonly Type1 EachWay = new("each-way");

    public static readonly Type1 ExtraPlace = new("extra-place");

    public static readonly Type1 Bog = new("bog");

    public static readonly Type1 TwoUp = new("two-up");

    public static readonly Type1 EachWay2 = new("each_way");

    public static readonly Type1 ExtraPlace2 = new("extra_place");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> on_2Up,
        Func<TResult> onDutching,
        Func<TResult> onEachWay,
        Func<TResult> onExtraPlace,
        Func<TResult> onBog,
        Func<TResult> onTwoUp,
        Func<TResult> onEachWay2,
        Func<TResult> onExtraPlace2,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == _2Up => on_2Up(),
            _ when this == Dutching => onDutching(),
            _ when this == EachWay => onEachWay(),
            _ when this == ExtraPlace => onExtraPlace(),
            _ when this == Bog => onBog(),
            _ when this == TwoUp => onTwoUp(),
            _ when this == EachWay2 => onEachWay2(),
            _ when this == ExtraPlace2 => onExtraPlace2(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard,
        Action on_2Up,
        Action onDutching,
        Action onEachWay,
        Action onExtraPlace,
        Action onBog,
        Action onTwoUp,
        Action onEachWay2,
        Action onExtraPlace2,
        Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == _2Up) on_2Up();
        else if (this == Dutching) onDutching();
        else if (this == EachWay) onEachWay();
        else if (this == ExtraPlace) onExtraPlace();
        else if (this == Bog) onBog();
        else if (this == TwoUp) onTwoUp();
        else if (this == EachWay2) onEachWay2();
        else if (this == ExtraPlace2) onExtraPlace2();
        else otherwise(Value);
    }
}
