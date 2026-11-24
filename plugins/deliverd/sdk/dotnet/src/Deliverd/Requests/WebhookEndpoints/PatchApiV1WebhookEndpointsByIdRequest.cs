using System;
using Deliverd.Models;

namespace Deliverd.Requests.WebhookEndpoints;

/// <summary>
/// The inputs of the PatchApiV1WebhookEndpointsById operation.
/// </summary>
public sealed record PatchApiV1WebhookEndpointsByIdRequest
{
    /// <summary>
    /// The endpoint
    /// </summary>
    public required Guid Id { get; init; }

    public ApiV1WebhookEndpointsRequest1? Body { get; init; }
}
