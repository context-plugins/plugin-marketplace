using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<WebhookUpdateResponseName>))]
public sealed record WebhookUpdateResponseName : OpenStringEnum<WebhookUpdateResponseName>
{
    private WebhookUpdateResponseName(string value) : base(value)
    {
    }

    public static readonly WebhookUpdateResponseName BillingInvoiceCreated = new("billing-invoice-created");

    public static readonly WebhookUpdateResponseName BillingInvoicePaid = new("billing-invoice-paid");

    public static readonly WebhookUpdateResponseName BillingInvoicePosted = new("billing-invoice-posted");

    public static readonly WebhookUpdateResponseName BillingCheckoutCreated = new("billing-checkout-created");

    public static readonly WebhookUpdateResponseName BillingCheckoutCompleted = new("billing-checkout-completed");

    public static readonly WebhookUpdateResponseName BillingCheckoutExpired = new("billing-checkout-expired");

    public static readonly WebhookUpdateResponseName BillingPaymentSucceeded = new("billing-payment-succeeded");

    public static readonly WebhookUpdateResponseName BillingPaymentFailed = new("billing-payment-failed");

    public static readonly WebhookUpdateResponseName BillingCreditsDepleted = new("billing-credits-depleted");

    public static readonly WebhookUpdateResponseName BillingOverageIncurred = new("billing-overage-incurred");

    public TResult Match<TResult>(Func<TResult> onBillingInvoiceCreated,
        Func<TResult> onBillingInvoicePaid,
        Func<TResult> onBillingInvoicePosted,
        Func<TResult> onBillingCheckoutCreated,
        Func<TResult> onBillingCheckoutCompleted,
        Func<TResult> onBillingCheckoutExpired,
        Func<TResult> onBillingPaymentSucceeded,
        Func<TResult> onBillingPaymentFailed,
        Func<TResult> onBillingCreditsDepleted,
        Func<TResult> onBillingOverageIncurred,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BillingInvoiceCreated => onBillingInvoiceCreated(),
            _ when this == BillingInvoicePaid => onBillingInvoicePaid(),
            _ when this == BillingInvoicePosted => onBillingInvoicePosted(),
            _ when this == BillingCheckoutCreated => onBillingCheckoutCreated(),
            _ when this == BillingCheckoutCompleted => onBillingCheckoutCompleted(),
            _ when this == BillingCheckoutExpired => onBillingCheckoutExpired(),
            _ when this == BillingPaymentSucceeded => onBillingPaymentSucceeded(),
            _ when this == BillingPaymentFailed => onBillingPaymentFailed(),
            _ when this == BillingCreditsDepleted => onBillingCreditsDepleted(),
            _ when this == BillingOverageIncurred => onBillingOverageIncurred(),
            _ => otherwise(Value)
        };

    public void Match(Action onBillingInvoiceCreated,
        Action onBillingInvoicePaid,
        Action onBillingInvoicePosted,
        Action onBillingCheckoutCreated,
        Action onBillingCheckoutCompleted,
        Action onBillingCheckoutExpired,
        Action onBillingPaymentSucceeded,
        Action onBillingPaymentFailed,
        Action onBillingCreditsDepleted,
        Action onBillingOverageIncurred,
        Action<string> otherwise)
    {
        if (this == BillingInvoiceCreated) onBillingInvoiceCreated();
        else if (this == BillingInvoicePaid) onBillingInvoicePaid();
        else if (this == BillingInvoicePosted) onBillingInvoicePosted();
        else if (this == BillingCheckoutCreated) onBillingCheckoutCreated();
        else if (this == BillingCheckoutCompleted) onBillingCheckoutCompleted();
        else if (this == BillingCheckoutExpired) onBillingCheckoutExpired();
        else if (this == BillingPaymentSucceeded) onBillingPaymentSucceeded();
        else if (this == BillingPaymentFailed) onBillingPaymentFailed();
        else if (this == BillingCreditsDepleted) onBillingCreditsDepleted();
        else if (this == BillingOverageIncurred) onBillingOverageIncurred();
        else otherwise(Value);
    }
}
