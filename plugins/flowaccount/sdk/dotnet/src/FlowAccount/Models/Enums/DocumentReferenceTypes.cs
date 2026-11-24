using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = ImportDocument
/// 3 = PartialPayments
/// 5 = Batch
/// 7 = Etax
/// 9 = MiigratePartialPayments
/// 11 = BatchPartialPayments
/// 13 = DepositFirst
/// 15 = DepositLast
/// </summary>
[JsonConverter(typeof(IntEnumConverter<DocumentReferenceTypes>))]
public sealed record DocumentReferenceTypes : OpenIntEnum<DocumentReferenceTypes>
{
    private DocumentReferenceTypes(long value) : base(value)
    {
    }

    public static readonly DocumentReferenceTypes Value1 = new(1L);

    public static readonly DocumentReferenceTypes Value3 = new(3L);

    public static readonly DocumentReferenceTypes Value5 = new(5L);

    public static readonly DocumentReferenceTypes Value7 = new(7L);

    public static readonly DocumentReferenceTypes Value9 = new(9L);

    public static readonly DocumentReferenceTypes Value11 = new(11L);

    public static readonly DocumentReferenceTypes Value13 = new(13L);

    public static readonly DocumentReferenceTypes Value15 = new(15L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<TResult> onValue11,
        Func<TResult> onValue13,
        Func<TResult> onValue15,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value9 => onValue9(),
            _ when this == Value11 => onValue11(),
            _ when this == Value13 => onValue13(),
            _ when this == Value15 => onValue15(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue3,
        Action onValue5,
        Action onValue7,
        Action onValue9,
        Action onValue11,
        Action onValue13,
        Action onValue15,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value9) onValue9();
        else if (this == Value11) onValue11();
        else if (this == Value13) onValue13();
        else if (this == Value15) onValue15();
        else otherwise(Value);
    }
}
