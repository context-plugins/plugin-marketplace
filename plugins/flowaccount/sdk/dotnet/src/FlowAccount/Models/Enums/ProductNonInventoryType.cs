using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = NonStockProduct
/// 3 = SparepartProduct
/// 5 = SampleProduct
/// 7 = FreemiumProduct
/// 9 = SupplyProduct
/// 11 = OthersProduct
/// </summary>
[JsonConverter(typeof(IntEnumConverter<ProductNonInventoryType>))]
public sealed record ProductNonInventoryType : OpenIntEnum<ProductNonInventoryType>
{
    private ProductNonInventoryType(long value) : base(value)
    {
    }

    public static readonly ProductNonInventoryType Value1 = new(1L);

    public static readonly ProductNonInventoryType Value3 = new(3L);

    public static readonly ProductNonInventoryType Value5 = new(5L);

    public static readonly ProductNonInventoryType Value7 = new(7L);

    public static readonly ProductNonInventoryType Value9 = new(9L);

    public static readonly ProductNonInventoryType Value11 = new(11L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<TResult> onValue11,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value9 => onValue9(),
            _ when this == Value11 => onValue11(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue3,
        Action onValue5,
        Action onValue7,
        Action onValue9,
        Action onValue11,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value9) onValue9();
        else if (this == Value11) onValue11();
        else otherwise(Value);
    }
}
