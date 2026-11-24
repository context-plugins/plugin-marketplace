using System;
using System.Text.Json.Serialization;
using CarsXe.Core.Enum;

namespace CarsXe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DecodeVin>))]
public sealed record DecodeVin : OpenStringEnum<DecodeVin>
{
    private DecodeVin(string value) : base(value)
    {
    }

    public static readonly DecodeVin True = new("true");

    public static readonly DecodeVin _1 = new("1");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<TResult> on_1, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ when this == _1 => on_1(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action on_1, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else if (this == _1) on_1();
        else otherwise(Value);
    }
}
