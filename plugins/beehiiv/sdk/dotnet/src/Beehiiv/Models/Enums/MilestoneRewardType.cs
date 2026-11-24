using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// What type of reward this is.&lt;br&gt;<c>physical</c> - A product which must be sent to the subscriber.&lt;br&gt;<c>promo_code</c> - A code that is redeemable for goods or services.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MilestoneRewardType>))]
public sealed record MilestoneRewardType : OpenStringEnum<MilestoneRewardType>
{
    private MilestoneRewardType(string value) : base(value)
    {
    }

    public static readonly MilestoneRewardType Physical = new("physical");

    public static readonly MilestoneRewardType PromoCode = new("promo_code");

    public static readonly MilestoneRewardType Digital = new("digital");

    public static readonly MilestoneRewardType PremiumGift = new("premium_gift");

    public TResult Match<TResult>(Func<TResult> onPhysical,
        Func<TResult> onPromoCode,
        Func<TResult> onDigital,
        Func<TResult> onPremiumGift,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Physical => onPhysical(),
            _ when this == PromoCode => onPromoCode(),
            _ when this == Digital => onDigital(),
            _ when this == PremiumGift => onPremiumGift(),
            _ => otherwise(Value)
        };

    public void Match(Action onPhysical,
        Action onPromoCode,
        Action onDigital,
        Action onPremiumGift,
        Action<string> otherwise)
    {
        if (this == Physical) onPhysical();
        else if (this == PromoCode) onPromoCode();
        else if (this == Digital) onDigital();
        else if (this == PremiumGift) onPremiumGift();
        else otherwise(Value);
    }
}
