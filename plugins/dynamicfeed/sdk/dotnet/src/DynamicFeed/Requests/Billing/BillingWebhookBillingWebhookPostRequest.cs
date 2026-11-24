using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Billing;

/// <summary>
/// The inputs of the BillingWebhookBillingWebhookPost operation.
/// </summary>
public sealed record BillingWebhookBillingWebhookPostRequest
{
    public StripeSignature? StripeSignature { get; init; }
}
