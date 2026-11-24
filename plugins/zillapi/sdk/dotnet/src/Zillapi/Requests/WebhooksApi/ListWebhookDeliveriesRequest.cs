using System;
using Zillapi.Core.Validation.Attributes;

namespace Zillapi.Requests.WebhooksApi;

/// <summary>
/// The inputs of the ListWebhookDeliveries operation.
/// </summary>
public sealed record ListWebhookDeliveriesRequest
{
    /// <summary>
    /// Webhook UUID.
    /// </summary>
    public required Guid Id { get; init; }

    /// <summary>
    /// Page size (max 200).
    /// </summary>
    [Maximum(200)]
    public int Limit { get; init; } = 50;
}
