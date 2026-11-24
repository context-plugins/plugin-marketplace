using System;

namespace Deliverd.Requests.WebhookEndpoints;

/// <summary>
/// The inputs of the DeleteApiV1WebhookEndpointsById operation.
/// </summary>
public sealed record DeleteApiV1WebhookEndpointsByIdRequest
{
    /// <summary>
    /// The endpoint
    /// </summary>
    public required Guid Id { get; init; }
}
