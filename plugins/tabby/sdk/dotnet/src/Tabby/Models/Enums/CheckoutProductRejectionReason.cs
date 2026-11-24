using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// The reason why this product is not available to use
/// Possible values:
///   * <c>order_amount_too_high</c> - 'This purchase is above your current spending limit with Tabby, try a smaller cart or use another payment method.'
///   * <c>order_amount_too_low</c> - 'The purchase amount is below the minimum amount required to use Tabby, try adding more items or use another payment method.'
///   * <c>not_available</c> - 'Sorry, Tabby is unable to approve this purchase, please use an alternative payment method for your order.'
///   * <c>null</c> - if <c>is_available</c> is <c>true</c> and customer is able to use it.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CheckoutProductRejectionReason>))]
public sealed record CheckoutProductRejectionReason : OpenStringEnum<CheckoutProductRejectionReason>
{
    private CheckoutProductRejectionReason(string value) : base(value)
    {
    }

    public static readonly CheckoutProductRejectionReason OrderAmountTooHigh = new("order_amount_too_high");

    public static readonly CheckoutProductRejectionReason OrderAmountTooLow = new("order_amount_too_low");

    public static readonly CheckoutProductRejectionReason NotAvailable = new("not_available");

    public static readonly CheckoutProductRejectionReason Null = new("null");

    public TResult Match<TResult>(Func<TResult> onOrderAmountTooHigh,
        Func<TResult> onOrderAmountTooLow,
        Func<TResult> onNotAvailable,
        Func<TResult> onNull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OrderAmountTooHigh => onOrderAmountTooHigh(),
            _ when this == OrderAmountTooLow => onOrderAmountTooLow(),
            _ when this == NotAvailable => onNotAvailable(),
            _ when this == Null => onNull(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrderAmountTooHigh,
        Action onOrderAmountTooLow,
        Action onNotAvailable,
        Action onNull,
        Action<string> otherwise)
    {
        if (this == OrderAmountTooHigh) onOrderAmountTooHigh();
        else if (this == OrderAmountTooLow) onOrderAmountTooLow();
        else if (this == NotAvailable) onNotAvailable();
        else if (this == Null) onNull();
        else otherwise(Value);
    }
}
