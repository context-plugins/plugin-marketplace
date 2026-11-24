using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

[JsonConverter(typeof(IntEnumConverter<Number>))]
public sealed record Number : OpenIntEnum<Number>
{
    private Number(long value) : base(value)
    {
    }

    public static readonly Number Value1001 = new(1001L);

    public static readonly Number Value1002 = new(1002L);

    public static readonly Number Value1101 = new(1101L);

    public static readonly Number Value1201 = new(1201L);

    public static readonly Number Value1301 = new(1301L);

    public static readonly Number Value2001 = new(2001L);

    public static readonly Number Value2002 = new(2002L);

    public static readonly Number Value2101 = new(2101L);

    public static readonly Number Value3001 = new(3001L);

    public static readonly Number Value3002 = new(3002L);

    public static readonly Number Value3003 = new(3003L);

    public static readonly Number Value3004 = new(3004L);

    public static readonly Number Value3005 = new(3005L);

    public static readonly Number Value3006 = new(3006L);

    public static readonly Number Value3007 = new(3007L);

    public static readonly Number Value4001 = new(4001L);

    public static readonly Number Value4002 = new(4002L);

    public static readonly Number Value4003 = new(4003L);

    public static readonly Number Value4004 = new(4004L);

    public static readonly Number Value4005 = new(4005L);

    public static readonly Number Value4101 = new(4101L);

    public static readonly Number Value4102 = new(4102L);

    public static readonly Number Value4103 = new(4103L);

    public static readonly Number Value4104 = new(4104L);

    public static readonly Number Value4105 = new(4105L);

    public static readonly Number Value4106 = new(4106L);

    public static readonly Number Value5001 = new(5001L);

    public static readonly Number Value5002 = new(5002L);

    public static readonly Number Value5003 = new(5003L);

    public static readonly Number Value5004 = new(5004L);

    public static readonly Number Value5005 = new(5005L);

    public static readonly Number Value5101 = new(5101L);

    public static readonly Number Value9001 = new(9001L);

    public static readonly Number Value9002 = new(9002L);

    public TResult Match<TResult>(Func<TResult> onValue1001,
        Func<TResult> onValue1002,
        Func<TResult> onValue1101,
        Func<TResult> onValue1201,
        Func<TResult> onValue1301,
        Func<TResult> onValue2001,
        Func<TResult> onValue2002,
        Func<TResult> onValue2101,
        Func<TResult> onValue3001,
        Func<TResult> onValue3002,
        Func<TResult> onValue3003,
        Func<TResult> onValue3004,
        Func<TResult> onValue3005,
        Func<TResult> onValue3006,
        Func<TResult> onValue3007,
        Func<TResult> onValue4001,
        Func<TResult> onValue4002,
        Func<TResult> onValue4003,
        Func<TResult> onValue4004,
        Func<TResult> onValue4005,
        Func<TResult> onValue4101,
        Func<TResult> onValue4102,
        Func<TResult> onValue4103,
        Func<TResult> onValue4104,
        Func<TResult> onValue4105,
        Func<TResult> onValue4106,
        Func<TResult> onValue5001,
        Func<TResult> onValue5002,
        Func<TResult> onValue5003,
        Func<TResult> onValue5004,
        Func<TResult> onValue5005,
        Func<TResult> onValue5101,
        Func<TResult> onValue9001,
        Func<TResult> onValue9002,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1001 => onValue1001(),
            _ when this == Value1002 => onValue1002(),
            _ when this == Value1101 => onValue1101(),
            _ when this == Value1201 => onValue1201(),
            _ when this == Value1301 => onValue1301(),
            _ when this == Value2001 => onValue2001(),
            _ when this == Value2002 => onValue2002(),
            _ when this == Value2101 => onValue2101(),
            _ when this == Value3001 => onValue3001(),
            _ when this == Value3002 => onValue3002(),
            _ when this == Value3003 => onValue3003(),
            _ when this == Value3004 => onValue3004(),
            _ when this == Value3005 => onValue3005(),
            _ when this == Value3006 => onValue3006(),
            _ when this == Value3007 => onValue3007(),
            _ when this == Value4001 => onValue4001(),
            _ when this == Value4002 => onValue4002(),
            _ when this == Value4003 => onValue4003(),
            _ when this == Value4004 => onValue4004(),
            _ when this == Value4005 => onValue4005(),
            _ when this == Value4101 => onValue4101(),
            _ when this == Value4102 => onValue4102(),
            _ when this == Value4103 => onValue4103(),
            _ when this == Value4104 => onValue4104(),
            _ when this == Value4105 => onValue4105(),
            _ when this == Value4106 => onValue4106(),
            _ when this == Value5001 => onValue5001(),
            _ when this == Value5002 => onValue5002(),
            _ when this == Value5003 => onValue5003(),
            _ when this == Value5004 => onValue5004(),
            _ when this == Value5005 => onValue5005(),
            _ when this == Value5101 => onValue5101(),
            _ when this == Value9001 => onValue9001(),
            _ when this == Value9002 => onValue9002(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1001,
        Action onValue1002,
        Action onValue1101,
        Action onValue1201,
        Action onValue1301,
        Action onValue2001,
        Action onValue2002,
        Action onValue2101,
        Action onValue3001,
        Action onValue3002,
        Action onValue3003,
        Action onValue3004,
        Action onValue3005,
        Action onValue3006,
        Action onValue3007,
        Action onValue4001,
        Action onValue4002,
        Action onValue4003,
        Action onValue4004,
        Action onValue4005,
        Action onValue4101,
        Action onValue4102,
        Action onValue4103,
        Action onValue4104,
        Action onValue4105,
        Action onValue4106,
        Action onValue5001,
        Action onValue5002,
        Action onValue5003,
        Action onValue5004,
        Action onValue5005,
        Action onValue5101,
        Action onValue9001,
        Action onValue9002,
        Action<long> otherwise)
    {
        if (this == Value1001) onValue1001();
        else if (this == Value1002) onValue1002();
        else if (this == Value1101) onValue1101();
        else if (this == Value1201) onValue1201();
        else if (this == Value1301) onValue1301();
        else if (this == Value2001) onValue2001();
        else if (this == Value2002) onValue2002();
        else if (this == Value2101) onValue2101();
        else if (this == Value3001) onValue3001();
        else if (this == Value3002) onValue3002();
        else if (this == Value3003) onValue3003();
        else if (this == Value3004) onValue3004();
        else if (this == Value3005) onValue3005();
        else if (this == Value3006) onValue3006();
        else if (this == Value3007) onValue3007();
        else if (this == Value4001) onValue4001();
        else if (this == Value4002) onValue4002();
        else if (this == Value4003) onValue4003();
        else if (this == Value4004) onValue4004();
        else if (this == Value4005) onValue4005();
        else if (this == Value4101) onValue4101();
        else if (this == Value4102) onValue4102();
        else if (this == Value4103) onValue4103();
        else if (this == Value4104) onValue4104();
        else if (this == Value4105) onValue4105();
        else if (this == Value4106) onValue4106();
        else if (this == Value5001) onValue5001();
        else if (this == Value5002) onValue5002();
        else if (this == Value5003) onValue5003();
        else if (this == Value5004) onValue5004();
        else if (this == Value5005) onValue5005();
        else if (this == Value5101) onValue5101();
        else if (this == Value9001) onValue9001();
        else if (this == Value9002) onValue9002();
        else otherwise(Value);
    }
}
