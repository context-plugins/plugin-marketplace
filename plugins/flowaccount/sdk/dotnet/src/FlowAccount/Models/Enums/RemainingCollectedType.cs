using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = CashShortOrOver
/// 3 = CashDiscount
/// 5 = ExchangeRateDiff
/// 51 = SalesCashShortOrOver
/// 53 = SalesDiscount
/// 55 = SalesBankFee
/// 57 = SalesExchangeRateDiff
/// </summary>
[JsonConverter(typeof(IntEnumConverter<RemainingCollectedType>))]
public sealed record RemainingCollectedType : OpenIntEnum<RemainingCollectedType>
{
    private RemainingCollectedType(long value) : base(value)
    {
    }

    public static readonly RemainingCollectedType Value1 = new(1L);

    public static readonly RemainingCollectedType Value3 = new(3L);

    public static readonly RemainingCollectedType Value5 = new(5L);

    public static readonly RemainingCollectedType Value51 = new(51L);

    public static readonly RemainingCollectedType Value53 = new(53L);

    public static readonly RemainingCollectedType Value55 = new(55L);

    public static readonly RemainingCollectedType Value57 = new(57L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue51,
        Func<TResult> onValue53,
        Func<TResult> onValue55,
        Func<TResult> onValue57,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value51 => onValue51(),
            _ when this == Value53 => onValue53(),
            _ when this == Value55 => onValue55(),
            _ when this == Value57 => onValue57(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue3,
        Action onValue5,
        Action onValue51,
        Action onValue53,
        Action onValue55,
        Action onValue57,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value51) onValue51();
        else if (this == Value53) onValue53();
        else if (this == Value55) onValue55();
        else if (this == Value57) onValue57();
        else otherwise(Value);
    }
}
