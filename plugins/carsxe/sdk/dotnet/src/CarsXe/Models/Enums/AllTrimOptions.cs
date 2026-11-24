using System;
using System.Text.Json.Serialization;
using CarsXe.Core.Enum;

namespace CarsXe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AllTrimOptions>))]
public sealed record AllTrimOptions : OpenStringEnum<AllTrimOptions>
{
    private AllTrimOptions(string value) : base(value)
    {
    }

    public static readonly AllTrimOptions _1 = new("1");

    public TResult Match<TResult>(Func<TResult> on_1, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1, Action<string> otherwise)
    {
        if (this == _1) on_1();
        else otherwise(Value);
    }
}
