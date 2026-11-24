using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the <c>billingType</c> field inside <c>DeveloperMonetizationConfig</c> resource. Flag that specifies the billing account type, prepaid or postpaid.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentFundingModel>))]
public sealed record PaymentFundingModel : OpenStringEnum<PaymentFundingModel>
{
    private PaymentFundingModel(string value) : base(value)
    {
    }

    public static readonly PaymentFundingModel PaymentFundingModelUnspecified = new(
        "PAYMENT_FUNDING_MODEL_UNSPECIFIED");

    public static readonly PaymentFundingModel Prepaid = new("PREPAID");

    public static readonly PaymentFundingModel Postpaid = new("POSTPAID");

    public TResult Match<TResult>(Func<TResult> onPaymentFundingModelUnspecified,
        Func<TResult> onPrepaid,
        Func<TResult> onPostpaid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaymentFundingModelUnspecified => onPaymentFundingModelUnspecified(),
            _ when this == Prepaid => onPrepaid(),
            _ when this == Postpaid => onPostpaid(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaymentFundingModelUnspecified,
        Action onPrepaid,
        Action onPostpaid,
        Action<string> otherwise)
    {
        if (this == PaymentFundingModelUnspecified) onPaymentFundingModelUnspecified();
        else if (this == Prepaid) onPrepaid();
        else if (this == Postpaid) onPostpaid();
        else otherwise(Value);
    }
}
