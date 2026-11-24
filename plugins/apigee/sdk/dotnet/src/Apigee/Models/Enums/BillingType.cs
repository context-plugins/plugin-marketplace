using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Billing type of the Apigee organization. See <see href="https://cloud.google.com/apigee/pricing">Apigee pricing</see>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillingType>))]
public sealed record BillingType : OpenStringEnum<BillingType>
{
    private BillingType(string value) : base(value)
    {
    }

    public static readonly BillingType BillingTypeUnspecified = new("BILLING_TYPE_UNSPECIFIED");

    public static readonly BillingType Subscription = new("SUBSCRIPTION");

    public static readonly BillingType Evaluation = new("EVALUATION");

    public static readonly BillingType Payg = new("PAYG");

    public TResult Match<TResult>(Func<TResult> onBillingTypeUnspecified,
        Func<TResult> onSubscription,
        Func<TResult> onEvaluation,
        Func<TResult> onPayg,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BillingTypeUnspecified => onBillingTypeUnspecified(),
            _ when this == Subscription => onSubscription(),
            _ when this == Evaluation => onEvaluation(),
            _ when this == Payg => onPayg(),
            _ => otherwise(Value)
        };

    public void Match(Action onBillingTypeUnspecified,
        Action onSubscription,
        Action onEvaluation,
        Action onPayg,
        Action<string> otherwise)
    {
        if (this == BillingTypeUnspecified) onBillingTypeUnspecified();
        else if (this == Subscription) onSubscription();
        else if (this == Evaluation) onEvaluation();
        else if (this == Payg) onPayg();
        else otherwise(Value);
    }
}
