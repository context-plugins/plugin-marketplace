using System;
using System.Text.Json.Serialization;
using FinancialModelingPrep.Core.Enum;

namespace FinancialModelingPrep.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Period>))]
public sealed record Period : OpenStringEnum<Period>
{
    private Period(string value) : base(value)
    {
    }

    public static readonly Period Annual = new("annual");

    public static readonly Period Quarter = new("quarter");

    public TResult Match<TResult>(Func<TResult> onAnnual, Func<TResult> onQuarter, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Annual => onAnnual(),
            _ when this == Quarter => onQuarter(),
            _ => otherwise(Value)
        };

    public void Match(Action onAnnual, Action onQuarter, Action<string> otherwise)
    {
        if (this == Annual) onAnnual();
        else if (this == Quarter) onQuarter();
        else otherwise(Value);
    }
}
