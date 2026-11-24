using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Authoritative aggregation applied to this metric column.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Aggregation1>))]
public sealed record Aggregation1 : OpenStringEnum<Aggregation1>
{
    private Aggregation1(string value) : base(value)
    {
    }

    public static readonly Aggregation1 Total = new("total");

    public static readonly Aggregation1 PercentTotal = new("percent_total");

    public static readonly Aggregation1 PercentCol = new("percent_col");

    public static readonly Aggregation1 PercentRow = new("percent_row");

    public static readonly Aggregation1 TotalOverTotal = new("total_over_total");

    public static readonly Aggregation1 Count = new("count");

    public TResult Match<TResult>(Func<TResult> onTotal,
        Func<TResult> onPercentTotal,
        Func<TResult> onPercentCol,
        Func<TResult> onPercentRow,
        Func<TResult> onTotalOverTotal,
        Func<TResult> onCount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Total => onTotal(),
            _ when this == PercentTotal => onPercentTotal(),
            _ when this == PercentCol => onPercentCol(),
            _ when this == PercentRow => onPercentRow(),
            _ when this == TotalOverTotal => onTotalOverTotal(),
            _ when this == Count => onCount(),
            _ => otherwise(Value)
        };

    public void Match(Action onTotal,
        Action onPercentTotal,
        Action onPercentCol,
        Action onPercentRow,
        Action onTotalOverTotal,
        Action onCount,
        Action<string> otherwise)
    {
        if (this == Total) onTotal();
        else if (this == PercentTotal) onPercentTotal();
        else if (this == PercentCol) onPercentCol();
        else if (this == PercentRow) onPercentRow();
        else if (this == TotalOverTotal) onTotalOverTotal();
        else if (this == Count) onCount();
        else otherwise(Value);
    }
}
