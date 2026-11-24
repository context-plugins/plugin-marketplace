using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = PCT
/// 3 = PPA
/// 5 = PPB
/// </summary>
[JsonConverter(typeof(IntEnumConverter<KConnectProductCode>))]
public sealed record KConnectProductCode : OpenIntEnum<KConnectProductCode>
{
    private KConnectProductCode(long value) : base(value)
    {
    }

    public static readonly KConnectProductCode Value1 = new(1L);

    public static readonly KConnectProductCode Value3 = new(3L);

    public static readonly KConnectProductCode Value5 = new(5L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1, Action onValue3, Action onValue5, Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else otherwise(Value);
    }
}
