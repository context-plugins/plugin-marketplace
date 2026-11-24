using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See <see href="https://cloud.google.com/apigee/pricing/">Apigee pricing</see>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionType>))]
public sealed record SubscriptionType : OpenStringEnum<SubscriptionType>
{
    private SubscriptionType(string value) : base(value)
    {
    }

    public static readonly SubscriptionType SubscriptionTypeUnspecified = new("SUBSCRIPTION_TYPE_UNSPECIFIED");

    public static readonly SubscriptionType Paid = new("PAID");

    public static readonly SubscriptionType Trial = new("TRIAL");

    public TResult Match<TResult>(Func<TResult> onSubscriptionTypeUnspecified,
        Func<TResult> onPaid,
        Func<TResult> onTrial,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SubscriptionTypeUnspecified => onSubscriptionTypeUnspecified(),
            _ when this == Paid => onPaid(),
            _ when this == Trial => onTrial(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubscriptionTypeUnspecified, Action onPaid, Action onTrial, Action<string> otherwise)
    {
        if (this == SubscriptionTypeUnspecified) onSubscriptionTypeUnspecified();
        else if (this == Paid) onPaid();
        else if (this == Trial) onTrial();
        else otherwise(Value);
    }
}
