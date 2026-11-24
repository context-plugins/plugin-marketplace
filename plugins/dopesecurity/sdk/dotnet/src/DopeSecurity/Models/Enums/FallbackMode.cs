using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Enum;

namespace DopeSecurity.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FallbackMode>))]
public sealed record FallbackMode : OpenStringEnum<FallbackMode>
{
    private FallbackMode(string value) : base(value)
    {
    }

    public static readonly FallbackMode True = new("true");

    public static readonly FallbackMode False = new("false");

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
