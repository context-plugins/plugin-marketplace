using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExchangesOnly>))]
public sealed record ExchangesOnly : OpenStringEnum<ExchangesOnly>
{
    private ExchangesOnly(string value) : base(value)
    {
    }

    public static readonly ExchangesOnly True = new("true");

    public static readonly ExchangesOnly False = new("false");

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
