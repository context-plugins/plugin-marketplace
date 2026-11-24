using Tabby.Models;

namespace Tabby.Requests.WebhooksApi;

/// <summary>
/// The inputs of the PostWebhook operation.
/// </summary>
public sealed record PostWebhookRequest
{
    /// <summary>
    /// Used for multi store/countries setup, please contact your Account manager to recognize that
    /// </summary>
    public required string XMerchantCode { get; init; }

    public required WebhookRegistration Body { get; init; }
}
