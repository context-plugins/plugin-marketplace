using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 0 = OwnCompany
/// 3 = Client
/// 5 = Vendor
/// 7 = VendorAndClient
/// 9 = ExpenseVendor
/// </summary>
[JsonConverter(typeof(IntEnumConverter<ContactTypes>))]
public sealed record ContactTypes : OpenIntEnum<ContactTypes>
{
    private ContactTypes(long value) : base(value)
    {
    }

    public static readonly ContactTypes Value0 = new(0L);

    public static readonly ContactTypes Value3 = new(3L);

    public static readonly ContactTypes Value5 = new(5L);

    public static readonly ContactTypes Value7 = new(7L);

    public static readonly ContactTypes Value9 = new(9L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value9 => onValue9(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0,
        Action onValue3,
        Action onValue5,
        Action onValue7,
        Action onValue9,
        Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value9) onValue9();
        else otherwise(Value);
    }
}
