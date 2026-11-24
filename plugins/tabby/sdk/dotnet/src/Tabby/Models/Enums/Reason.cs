using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// Reason for requesting dispute challenge:
///   - <c>merchant_reason_other</c> - there were other problems with the order that required further clarification;
///   - <c>merchant_reason_order_on_its_way</c> - the order has been confirmed and is in the process of being delivered;
///   - <c>merchant_reason_order_has_been_already_delivered</c> - the order has already been delivered and is complete;
///   - <c>merchant_reason_order_amount_should_be_different</c> - there was a problem with the amount of the order and it needed to be changed;
///   - <c>merchant_reason_problem_with_delivery</c> - there was a problem with the order during delivery that needed to be adjusted and resolved.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason MerchantReasonOther = new("merchant_reason_other");

    public static readonly Reason MerchantReasonOrderOnItsWay = new("merchant_reason_order_on_its_way");

    public static readonly Reason MerchantReasonOrderHasBeenAlreadyDelivered = new(
        "merchant_reason_order_has_been_already_delivered");

    public static readonly Reason MerchantReasonOrderAmountShouldBeDifferent = new(
        "merchant_reason_order_amount_should_be_different");

    public static readonly Reason MerchantReasonProblemWithDelivery = new("merchant_reason_problem_with_delivery");

    public TResult Match<TResult>(Func<TResult> onMerchantReasonOther,
        Func<TResult> onMerchantReasonOrderOnItsWay,
        Func<TResult> onMerchantReasonOrderHasBeenAlreadyDelivered,
        Func<TResult> onMerchantReasonOrderAmountShouldBeDifferent,
        Func<TResult> onMerchantReasonProblemWithDelivery,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MerchantReasonOther => onMerchantReasonOther(),
            _ when this == MerchantReasonOrderOnItsWay => onMerchantReasonOrderOnItsWay(),
            _ when this == MerchantReasonOrderHasBeenAlreadyDelivered => onMerchantReasonOrderHasBeenAlreadyDelivered(),
            _ when this == MerchantReasonOrderAmountShouldBeDifferent => onMerchantReasonOrderAmountShouldBeDifferent(),
            _ when this == MerchantReasonProblemWithDelivery => onMerchantReasonProblemWithDelivery(),
            _ => otherwise(Value)
        };

    public void Match(Action onMerchantReasonOther,
        Action onMerchantReasonOrderOnItsWay,
        Action onMerchantReasonOrderHasBeenAlreadyDelivered,
        Action onMerchantReasonOrderAmountShouldBeDifferent,
        Action onMerchantReasonProblemWithDelivery,
        Action<string> otherwise)
    {
        if (this == MerchantReasonOther) onMerchantReasonOther();
        else if (this == MerchantReasonOrderOnItsWay) onMerchantReasonOrderOnItsWay();
        else if (this == MerchantReasonOrderHasBeenAlreadyDelivered) onMerchantReasonOrderHasBeenAlreadyDelivered();
        else if (this == MerchantReasonOrderAmountShouldBeDifferent) onMerchantReasonOrderAmountShouldBeDifferent();
        else if (this == MerchantReasonProblemWithDelivery) onMerchantReasonProblemWithDelivery();
        else otherwise(Value);
    }
}
