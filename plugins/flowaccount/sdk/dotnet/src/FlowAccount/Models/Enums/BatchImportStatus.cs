using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 0 = None
/// 1 = Awaiting
/// 3 = Pending
/// 5 = Failed
/// 6 = HandledDuplicated
/// 7 = Succeed
/// </summary>
[JsonConverter(typeof(IntEnumConverter<BatchImportStatus>))]
public sealed record BatchImportStatus : OpenIntEnum<BatchImportStatus>
{
    private BatchImportStatus(long value) : base(value)
    {
    }

    public static readonly BatchImportStatus Value0 = new(0L);

    public static readonly BatchImportStatus Value1 = new(1L);

    public static readonly BatchImportStatus Value3 = new(3L);

    public static readonly BatchImportStatus Value5 = new(5L);

    public static readonly BatchImportStatus Value6 = new(6L);

    public static readonly BatchImportStatus Value7 = new(7L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue6,
        Func<TResult> onValue7,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value6 => onValue6(),
            _ when this == Value7 => onValue7(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0,
        Action onValue1,
        Action onValue3,
        Action onValue5,
        Action onValue6,
        Action onValue7,
        Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value6) onValue6();
        else if (this == Value7) onValue7();
        else otherwise(Value);
    }
}
