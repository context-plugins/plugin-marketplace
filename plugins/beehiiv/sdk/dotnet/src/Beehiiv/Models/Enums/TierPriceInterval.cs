using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TierPriceInterval>))]
public sealed record TierPriceInterval : OpenStringEnum<TierPriceInterval>
{
    private TierPriceInterval(string value) : base(value)
    {
    }

    public static readonly TierPriceInterval Month = new("month");

    public static readonly TierPriceInterval Quarter = new("quarter");

    public static readonly TierPriceInterval Year = new("year");

    public static readonly TierPriceInterval OneTime = new("one_time");

    public static readonly TierPriceInterval Donation = new("donation");

    public TResult Match<TResult>(Func<TResult> onMonth,
        Func<TResult> onQuarter,
        Func<TResult> onYear,
        Func<TResult> onOneTime,
        Func<TResult> onDonation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Month => onMonth(),
            _ when this == Quarter => onQuarter(),
            _ when this == Year => onYear(),
            _ when this == OneTime => onOneTime(),
            _ when this == Donation => onDonation(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonth,
        Action onQuarter,
        Action onYear,
        Action onOneTime,
        Action onDonation,
        Action<string> otherwise)
    {
        if (this == Month) onMonth();
        else if (this == Quarter) onQuarter();
        else if (this == Year) onYear();
        else if (this == OneTime) onOneTime();
        else if (this == Donation) onDonation();
        else otherwise(Value);
    }
}
