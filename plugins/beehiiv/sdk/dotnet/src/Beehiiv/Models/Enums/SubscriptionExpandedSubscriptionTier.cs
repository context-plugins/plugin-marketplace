using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The current tier of the subscription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionExpandedSubscriptionTier>))]
public sealed record SubscriptionExpandedSubscriptionTier : OpenStringEnum<SubscriptionExpandedSubscriptionTier>
{
    private SubscriptionExpandedSubscriptionTier(string value) : base(value)
    {
    }

    public static readonly SubscriptionExpandedSubscriptionTier Free = new("free");

    public static readonly SubscriptionExpandedSubscriptionTier Premium = new("premium");

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
