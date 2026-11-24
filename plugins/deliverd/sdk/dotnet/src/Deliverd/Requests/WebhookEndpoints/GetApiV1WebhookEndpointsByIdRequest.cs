using System;

namespace Deliverd.Requests.WebhookEndpoints;

/// <summary>
/// The inputs of the GetApiV1WebhookEndpointsById operation.
/// </summary>
public sealed record GetApiV1WebhookEndpointsByIdRequest
{
    /// <summary>
    /// The endpoint
    /// </summary>
    public required Guid Id { get; init; }
}
