using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Whether the threshold applies to each value (default) or the series total.
/// Same field as the DoiT Console metric filter <c>operand</c> (<c>OperandSingleValue</c> /
/// <c>OperandSeriesTotal</c>). On input, omitted defaults to <c>single_value</c>. GET responses
/// echo the effective value (<c>single_value</c> or <c>series_total</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operand>))]
public sealed record Operand : OpenStringEnum<Operand>
{
    private Operand(string value) : base(value)
    {
    }

    public static readonly Operand SingleValue = new("single_value");

    public static readonly Operand SeriesTotal = new("series_total");

    public TResult Match<TResult>(Func<TResult> onSingleValue,
        Func<TResult> onSeriesTotal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SingleValue => onSingleValue(),
            _ when this == SeriesTotal => onSeriesTotal(),
            _ => otherwise(Value)
        };

    public void Match(Action onSingleValue, Action onSeriesTotal, Action<string> otherwise)
    {
        if (this == SingleValue) onSingleValue();
        else if (this == SeriesTotal) onSeriesTotal();
        else otherwise(Value);
    }
}
