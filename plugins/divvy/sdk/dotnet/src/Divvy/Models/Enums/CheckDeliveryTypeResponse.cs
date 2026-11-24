using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum for Check delivery type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CheckDeliveryTypeResponse>))]
public sealed record CheckDeliveryTypeResponse : OpenStringEnum<CheckDeliveryTypeResponse>
{
    private CheckDeliveryTypeResponse(string value) : base(value)
    {
    }

    public static readonly CheckDeliveryTypeResponse Standard = new("STANDARD");

    public static readonly CheckDeliveryTypeResponse Ups1Day = new("UPS_1DAY");

    public static readonly CheckDeliveryTypeResponse Ups2Day = new("UPS_2DAY");

    public static readonly CheckDeliveryTypeResponse Ups3Day = new("UPS_3DAY");

    public static readonly CheckDeliveryTypeResponse RtpDelivery = new("RTP_DELIVERY");

    public static readonly CheckDeliveryTypeResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onUps1Day,
        Func<TResult> onUps2Day,
        Func<TResult> onUps3Day,
        Func<TResult> onRtpDelivery,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Ups1Day => onUps1Day(),
            _ when this == Ups2Day => onUps2Day(),
            _ when this == Ups3Day => onUps3Day(),
            _ when this == RtpDelivery => onRtpDelivery(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard,
        Action onUps1Day,
        Action onUps2Day,
        Action onUps3Day,
        Action onRtpDelivery,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Ups1Day) onUps1Day();
        else if (this == Ups2Day) onUps2Day();
        else if (this == Ups3Day) onUps3Day();
        else if (this == RtpDelivery) onRtpDelivery();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
