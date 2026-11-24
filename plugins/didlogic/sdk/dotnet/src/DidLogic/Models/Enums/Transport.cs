using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Transport type: 1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone, 12 = WebSocket, 13 = SDK (rings the account of one of your SDK tokens; set up through the SDK, not through this API)
/// </summary>
[JsonConverter(typeof(IntEnumConverter<Transport>))]
public sealed record Transport : OpenIntEnum<Transport>
{
    private Transport(long value) : base(value)
    {
    }

    public static readonly Transport Value1 = new(1L);

    public static readonly Transport Value4 = new(4L);

    public static readonly Transport Value5 = new(5L);

    public static readonly Transport Value10 = new(10L);

    public static readonly Transport Value12 = new(12L);

    public static readonly Transport Value13 = new(13L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue4,
        Func<TResult> onValue5,
        Func<TResult> onValue10,
        Func<TResult> onValue12,
        Func<TResult> onValue13,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value4 => onValue4(),
            _ when this == Value5 => onValue5(),
            _ when this == Value10 => onValue10(),
            _ when this == Value12 => onValue12(),
            _ when this == Value13 => onValue13(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue4,
        Action onValue5,
        Action onValue10,
        Action onValue12,
        Action onValue13,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value4) onValue4();
        else if (this == Value5) onValue5();
        else if (this == Value10) onValue10();
        else if (this == Value12) onValue12();
        else if (this == Value13) onValue13();
        else otherwise(Value);
    }
}
