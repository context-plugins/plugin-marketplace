using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// lastSoldDescending = newest sale first
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sort>))]
public sealed record Sort : OpenStringEnum<Sort>
{
    private Sort(string value) : base(value)
    {
    }

    public static readonly Sort QuantityAscending = new("quantityAscending");

    public static readonly Sort LastSoldDescending = new("lastSoldDescending");

    public TResult Match<TResult>(Func<TResult> onQuantityAscending,
        Func<TResult> onLastSoldDescending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == QuantityAscending => onQuantityAscending(),
            _ when this == LastSoldDescending => onLastSoldDescending(),
            _ => otherwise(Value)
        };

    public void Match(Action onQuantityAscending, Action onLastSoldDescending, Action<string> otherwise)
    {
        if (this == QuantityAscending) onQuantityAscending();
        else if (this == LastSoldDescending) onLastSoldDescending();
        else otherwise(Value);
    }
}
