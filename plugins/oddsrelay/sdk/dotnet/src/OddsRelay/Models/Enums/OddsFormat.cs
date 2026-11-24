using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OddsFormat>))]
public sealed record OddsFormat : OpenStringEnum<OddsFormat>
{
    private OddsFormat(string value) : base(value)
    {
    }

    public static readonly OddsFormat Decimal = new("decimal");

    public static readonly OddsFormat American = new("american");

    public TResult Match<TResult>(Func<TResult> onDecimal, Func<TResult> onAmerican, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Decimal => onDecimal(),
            _ when this == American => onAmerican(),
            _ => otherwise(Value)
        };

    public void Match(Action onDecimal, Action onAmerican, Action<string> otherwise)
    {
        if (this == Decimal) onDecimal();
        else if (this == American) onAmerican();
        else otherwise(Value);
    }
}
