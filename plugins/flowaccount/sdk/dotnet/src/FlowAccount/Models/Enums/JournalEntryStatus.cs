using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 0 = Delete
/// 1 = Awaiting
/// 5 = Approved
/// 9 = Void
/// </summary>
[JsonConverter(typeof(IntEnumConverter<JournalEntryStatus>))]
public sealed record JournalEntryStatus : OpenIntEnum<JournalEntryStatus>
{
    private JournalEntryStatus(long value) : base(value)
    {
    }

    public static readonly JournalEntryStatus Value0 = new(0L);

    public static readonly JournalEntryStatus Value1 = new(1L);

    public static readonly JournalEntryStatus Value5 = new(5L);

    public static readonly JournalEntryStatus Value9 = new(9L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<TResult> onValue5,
        Func<TResult> onValue9,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ when this == Value5 => onValue5(),
            _ when this == Value9 => onValue9(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0, Action onValue1, Action onValue5, Action onValue9, Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else if (this == Value5) onValue5();
        else if (this == Value9) onValue9();
        else otherwise(Value);
    }
}
