using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ChargeType>))]
public sealed record ChargeType : OpenStringEnum<ChargeType>
{
    private ChargeType(string value) : base(value)
    {
    }

    public static readonly ChargeType OneTime = new("oneTime");

    public static readonly ChargeType Recurring = new("recurring");

    public static readonly ChargeType Usage = new("usage");

    public static readonly ChargeType SeatBased = new("seatBased");

    public TResult Match<TResult>(Func<TResult> onOneTime,
        Func<TResult> onRecurring,
        Func<TResult> onUsage,
        Func<TResult> onSeatBased,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OneTime => onOneTime(),
            _ when this == Recurring => onRecurring(),
            _ when this == Usage => onUsage(),
            _ when this == SeatBased => onSeatBased(),
            _ => otherwise(Value)
        };

    public void Match(Action onOneTime,
        Action onRecurring,
        Action onUsage,
        Action onSeatBased,
        Action<string> otherwise)
    {
        if (this == OneTime) onOneTime();
        else if (this == Recurring) onRecurring();
        else if (this == Usage) onUsage();
        else if (this == SeatBased) onSeatBased();
        else otherwise(Value);
    }
}
