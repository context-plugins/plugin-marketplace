using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The acquisition channel
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionExpandedUtmChannel>))]
public sealed record SubscriptionExpandedUtmChannel : OpenStringEnum<SubscriptionExpandedUtmChannel>
{
    private SubscriptionExpandedUtmChannel(string value) : base(value)
    {
    }

    public static readonly SubscriptionExpandedUtmChannel Website = new("website");

    public static readonly SubscriptionExpandedUtmChannel Import = new("import");

    public static readonly SubscriptionExpandedUtmChannel Embed = new("embed");

    public static readonly SubscriptionExpandedUtmChannel Api = new("api");

    public static readonly SubscriptionExpandedUtmChannel Referral = new("referral");

    public static readonly SubscriptionExpandedUtmChannel Recommendation = new("recommendation");

    public static readonly SubscriptionExpandedUtmChannel MagicLink = new("magic_link");

    public static readonly SubscriptionExpandedUtmChannel Boost = new("boost");

    public static readonly SubscriptionExpandedUtmChannel BoostSend = new("boost_send");

    public static readonly SubscriptionExpandedUtmChannel BoostDirectLink = new("boost_direct_link");

    public static readonly SubscriptionExpandedUtmChannel Integration = new("integration");

    public static readonly SubscriptionExpandedUtmChannel Product = new("product");

    public static readonly SubscriptionExpandedUtmChannel GroupInvite = new("group_invite");

    public TResult Match<TResult>(Func<TResult> onWebsite,
        Func<TResult> onImport,
        Func<TResult> onEmbed,
        Func<TResult> onApi,
        Func<TResult> onReferral,
        Func<TResult> onRecommendation,
        Func<TResult> onMagicLink,
        Func<TResult> onBoost,
        Func<TResult> onBoostSend,
        Func<TResult> onBoostDirectLink,
        Func<TResult> onIntegration,
        Func<TResult> onProduct,
        Func<TResult> onGroupInvite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Website => onWebsite(),
            _ when this == Import => onImport(),
            _ when this == Embed => onEmbed(),
            _ when this == Api => onApi(),
            _ when this == Referral => onReferral(),
            _ when this == Recommendation => onRecommendation(),
            _ when this == MagicLink => onMagicLink(),
            _ when this == Boost => onBoost(),
            _ when this == BoostSend => onBoostSend(),
            _ when this == BoostDirectLink => onBoostDirectLink(),
            _ when this == Integration => onIntegration(),
            _ when this == Product => onProduct(),
            _ when this == GroupInvite => onGroupInvite(),
            _ => otherwise(Value)
        };

    public void Match(Action onWebsite,
        Action onImport,
        Action onEmbed,
        Action onApi,
        Action onReferral,
        Action onRecommendation,
        Action onMagicLink,
        Action onBoost,
        Action onBoostSend,
        Action onBoostDirectLink,
        Action onIntegration,
        Action onProduct,
        Action onGroupInvite,
        Action<string> otherwise)
    {
        if (this == Website) onWebsite();
        else if (this == Import) onImport();
        else if (this == Embed) onEmbed();
        else if (this == Api) onApi();
        else if (this == Referral) onReferral();
        else if (this == Recommendation) onRecommendation();
        else if (this == MagicLink) onMagicLink();
        else if (this == Boost) onBoost();
        else if (this == BoostSend) onBoostSend();
        else if (this == BoostDirectLink) onBoostDirectLink();
        else if (this == Integration) onIntegration();
        else if (this == Product) onProduct();
        else if (this == GroupInvite) onGroupInvite();
        else otherwise(Value);
    }
}
