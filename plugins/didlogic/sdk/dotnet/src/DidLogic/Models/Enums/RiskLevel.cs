using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RiskLevel>))]
public sealed record RiskLevel : OpenStringEnum<RiskLevel>
{
    private RiskLevel(string value) : base(value)
    {
    }

    public static readonly RiskLevel Low = new("Low");

    public static readonly RiskLevel High = new("High");

    public TResult Match<TResult>(Func<TResult> onLow, Func<TResult> onHigh, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Low => onLow(),
            _ when this == High => onHigh(),
            _ => otherwise(Value)
        };

    public void Match(Action onLow, Action onHigh, Action<string> otherwise)
    {
        if (this == Low) onLow();
        else if (this == High) onHigh();
        else otherwise(Value);
    }
}
