using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Optional parameter to set the tier for this subscription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionsPutRequestSubscriptionsItemTier1>))]
public sealed record SubscriptionsPutRequestSubscriptionsItemTier1 : OpenStringEnum<SubscriptionsPutRequestSubscriptionsItemTier1>
{
    private SubscriptionsPutRequestSubscriptionsItemTier1(string value) : base(value)
    {
    }

    public static readonly SubscriptionsPutRequestSubscriptionsItemTier1 Free = new("free");

    public static readonly SubscriptionsPutRequestSubscriptionsItemTier1 Premium = new("premium");

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
