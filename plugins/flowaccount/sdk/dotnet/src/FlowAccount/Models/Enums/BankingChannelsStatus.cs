using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = Active
/// 3 = InActive
/// </summary>
[JsonConverter(typeof(IntEnumConverter<BankingChannelsStatus>))]
public sealed record BankingChannelsStatus : OpenIntEnum<BankingChannelsStatus>
{
    private BankingChannelsStatus(long value) : base(value)
    {
    }

    public static readonly BankingChannelsStatus Value1 = new(1L);

    public static readonly BankingChannelsStatus Value3 = new(3L);

    public TResult Match<TResult>(Func<TResult> onValue1, Func<TResult> onValue3, Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1, Action onValue3, Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else otherwise(Value);
    }
}
