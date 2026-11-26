using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enum for Check delivery type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CheckDeliveryTypeRequest>))]
public sealed record CheckDeliveryTypeRequest : OpenStringEnum<CheckDeliveryTypeRequest>
{
    private CheckDeliveryTypeRequest(string value) : base(value)
    {
    }

    public static readonly CheckDeliveryTypeRequest Standard = new("STANDARD");

    public static readonly CheckDeliveryTypeRequest Ups1Day = new("UPS_1DAY");

    public static readonly CheckDeliveryTypeRequest Ups2Day = new("UPS_2DAY");

    public static readonly CheckDeliveryTypeRequest Ups3Day = new("UPS_3DAY");

    public static readonly CheckDeliveryTypeRequest RtpDelivery = new("RTP_DELIVERY");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onUps1Day,
        Func<TResult> onUps2Day,
        Func<TResult> onUps3Day,
        Func<TResult> onRtpDelivery,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Ups1Day => onUps1Day(),
            _ when this == Ups2Day => onUps2Day(),
            _ when this == Ups3Day => onUps3Day(),
            _ when this == RtpDelivery => onRtpDelivery(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard,
        Action onUps1Day,
        Action onUps2Day,
        Action onUps3Day,
        Action onRtpDelivery,
        Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Ups1Day) onUps1Day();
        else if (this == Ups2Day) onUps2Day();
        else if (this == Ups3Day) onUps3Day();
        else if (this == RtpDelivery) onRtpDelivery();
        else otherwise(Value);
    }
}
