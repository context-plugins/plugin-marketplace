using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The Tier of the Subscription (not required)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionsPatchRequestSubscriptionsItemTier>))]
public sealed record SubscriptionsPatchRequestSubscriptionsItemTier : OpenStringEnum<SubscriptionsPatchRequestSubscriptionsItemTier>
{
    private SubscriptionsPatchRequestSubscriptionsItemTier(string value) : base(value)
    {
    }

    public static readonly SubscriptionsPatchRequestSubscriptionsItemTier Free = new("free");

    public static readonly SubscriptionsPatchRequestSubscriptionsItemTier Premium = new("premium");

    public TResult Match<TResult>(Func<TResult> onFree, Func<TResult> onPremium, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Free => onFree(),
            _ when this == Premium => onPremium(),
            _ => otherwise(Value)
        };

    public void Match(Action onFree, Action onPremium, Action<string> otherwise)
    {
        if (this == Free) onFree();
        else if (this == Premium) onPremium();
        else otherwise(Value);
    }
}
