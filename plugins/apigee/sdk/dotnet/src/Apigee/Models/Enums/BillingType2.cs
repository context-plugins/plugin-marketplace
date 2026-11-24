using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Billing type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillingType2>))]
public sealed record BillingType2 : OpenStringEnum<BillingType2>
{
    private BillingType2(string value) : base(value)
    {
    }

    public static readonly BillingType2 BillingTypeUnspecified = new("BILLING_TYPE_UNSPECIFIED");

    public static readonly BillingType2 Prepaid = new("PREPAID");

    public static readonly BillingType2 Postpaid = new("POSTPAID");

    public TResult Match<TResult>(Func<TResult> onBillingTypeUnspecified,
        Func<TResult> onPrepaid,
        Func<TResult> onPostpaid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BillingTypeUnspecified => onBillingTypeUnspecified(),
            _ when this == Prepaid => onPrepaid(),
            _ when this == Postpaid => onPostpaid(),
            _ => otherwise(Value)
        };

    public void Match(Action onBillingTypeUnspecified, Action onPrepaid, Action onPostpaid, Action<string> otherwise)
    {
        if (this == BillingTypeUnspecified) onBillingTypeUnspecified();
        else if (this == Prepaid) onPrepaid();
        else if (this == Postpaid) onPostpaid();
        else otherwise(Value);
    }
}
