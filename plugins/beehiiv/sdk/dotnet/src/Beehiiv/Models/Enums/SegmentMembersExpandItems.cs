using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SegmentMembersExpandItems>))]
public sealed record SegmentMembersExpandItems : OpenStringEnum<SegmentMembersExpandItems>
{
    private SegmentMembersExpandItems(string value) : base(value)
    {
    }

    public static readonly SegmentMembersExpandItems Stats = new("stats");

    public static readonly SegmentMembersExpandItems CustomFields = new("custom_fields");

    public static readonly SegmentMembersExpandItems Referrals = new("referrals");

    public static readonly SegmentMembersExpandItems Tags = new("tags");

    public static readonly SegmentMembersExpandItems SubscriptionPremiumTiers = new("subscription_premium_tiers");

    public TResult Match<TResult>(Func<TResult> onStats,
        Func<TResult> onCustomFields,
        Func<TResult> onReferrals,
        Func<TResult> onTags,
        Func<TResult> onSubscriptionPremiumTiers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stats => onStats(),
            _ when this == CustomFields => onCustomFields(),
            _ when this == Referrals => onReferrals(),
            _ when this == Tags => onTags(),
            _ when this == SubscriptionPremiumTiers => onSubscriptionPremiumTiers(),
            _ => otherwise(Value)
        };

    public void Match(Action onStats,
        Action onCustomFields,
        Action onReferrals,
        Action onTags,
        Action onSubscriptionPremiumTiers,
        Action<string> otherwise)
    {
        if (this == Stats) onStats();
        else if (this == CustomFields) onCustomFields();
        else if (this == Referrals) onReferrals();
        else if (this == Tags) onTags();
        else if (this == SubscriptionPremiumTiers) onSubscriptionPremiumTiers();
        else otherwise(Value);
    }
}
