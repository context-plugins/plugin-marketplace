using System;
using Tabby.Models;

namespace Tabby.Requests.WebhooksApi;

/// <summary>
/// The inputs of the PutWebhook operation.
/// </summary>
public sealed record PutWebhookRequest
{
    /// <summary>
    /// ID of the webhook.
    /// </summary>
    public required Guid Id { get; init; }

    /// <summary>
    /// Used for multi store/countries setup, please contact your Account manager to recognize that
    /// </summary>
    public required string XMerchantCode { get; init; }

    public required WebhookUpdate Body { get; init; }
}
