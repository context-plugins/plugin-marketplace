using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. Subscription plan that the customer has purchased. Output only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionPlan>))]
public sealed record SubscriptionPlan : OpenStringEnum<SubscriptionPlan>
{
    private SubscriptionPlan(string value) : base(value)
    {
    }

    public static readonly SubscriptionPlan SubscriptionPlanUnspecified = new("SUBSCRIPTION_PLAN_UNSPECIFIED");

    public static readonly SubscriptionPlan Subscription2021 = new("SUBSCRIPTION_2021");

    public static readonly SubscriptionPlan Subscription2024 = new("SUBSCRIPTION_2024");

    public TResult Match<TResult>(Func<TResult> onSubscriptionPlanUnspecified,
        Func<TResult> onSubscription2021,
        Func<TResult> onSubscription2024,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SubscriptionPlanUnspecified => onSubscriptionPlanUnspecified(),
            _ when this == Subscription2021 => onSubscription2021(),
            _ when this == Subscription2024 => onSubscription2024(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubscriptionPlanUnspecified,
        Action onSubscription2021,
        Action onSubscription2024,
        Action<string> otherwise)
    {
        if (this == SubscriptionPlanUnspecified) onSubscriptionPlanUnspecified();
        else if (this == Subscription2021) onSubscription2021();
        else if (this == Subscription2024) onSubscription2024();
        else otherwise(Value);
    }
}
