using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Set to <c>AGGREGATE</c> to round after the settlement calculation. By default, rounding happens before the sum of the settlement calculation (i.e., round each fee transfer).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RoundingMode>))]
public sealed record RoundingMode : OpenStringEnum<RoundingMode>
{
    private RoundingMode(string value) : base(value)
    {
    }

    public static readonly RoundingMode Transaction = new("TRANSACTION");

    public static readonly RoundingMode Aggregate = new("AGGREGATE");

    public TResult Match<TResult>(Func<TResult> onTransaction,
        Func<TResult> onAggregate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Transaction => onTransaction(),
            _ when this == Aggregate => onAggregate(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransaction, Action onAggregate, Action<string> otherwise)
    {
        if (this == Transaction) onTransaction();
        else if (this == Aggregate) onAggregate();
        else otherwise(Value);
    }
}
