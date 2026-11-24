using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// 1 = Razorpay sends SMS/email notifications to customer on each charge.
/// </summary>
[JsonConverter(typeof(IntEnumConverter<CustomerNotify>))]
public sealed record CustomerNotify : OpenIntEnum<CustomerNotify>
{
    private CustomerNotify(long value) : base(value)
    {
    }

    public static readonly CustomerNotify Value0 = new(0L);

    public static readonly CustomerNotify Value1 = new(1L);

    public TResult Match<TResult>(Func<TResult> onValue0, Func<TResult> onValue1, Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0, Action onValue1, Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else otherwise(Value);
    }
}
