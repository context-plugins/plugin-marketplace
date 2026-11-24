using System;
using System.Text.Json.Serialization;
using Cubic.Core.Enum;

namespace Cubic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Seat>))]
public sealed record Seat : OpenStringEnum<Seat>
{
    private Seat(string value) : base(value)
    {
    }

    public static readonly Seat True = new("true");

    public static readonly Seat False = new("false");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<TResult> onFalse, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action onFalse, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else if (this == False) onFalse();
        else otherwise(Value);
    }
}
