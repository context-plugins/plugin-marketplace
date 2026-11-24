using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = Individual
/// 3 = Juristic
/// 9 = Undefined
/// </summary>
[JsonConverter(typeof(IntEnumConverter<ContactGroups>))]
public sealed record ContactGroups : OpenIntEnum<ContactGroups>
{
    private ContactGroups(long value) : base(value)
    {
    }

    public static readonly ContactGroups Value1 = new(1L);

    public static readonly ContactGroups Value3 = new(3L);

    public static readonly ContactGroups Value9 = new(9L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue9,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value9 => onValue9(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1, Action onValue3, Action onValue9, Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value9) onValue9();
        else otherwise(Value);
    }
}
