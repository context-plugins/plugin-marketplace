using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Mode3>))]
public sealed record Mode3 : OpenStringEnum<Mode3>
{
    private Mode3(string value) : base(value)
    {
    }

    public static readonly Mode3 Even = new("even");

    public static readonly Mode3 Custom = new("custom");

    public static readonly Mode3 Proportional = new("proportional");

    public TResult Match<TResult>(Func<TResult> onEven,
        Func<TResult> onCustom,
        Func<TResult> onProportional,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Even => onEven(),
            _ when this == Custom => onCustom(),
            _ when this == Proportional => onProportional(),
            _ => otherwise(Value)
        };

    public void Match(Action onEven, Action onCustom, Action onProportional, Action<string> otherwise)
    {
        if (this == Even) onEven();
        else if (this == Custom) onCustom();
        else if (this == Proportional) onProportional();
        else otherwise(Value);
    }
}
