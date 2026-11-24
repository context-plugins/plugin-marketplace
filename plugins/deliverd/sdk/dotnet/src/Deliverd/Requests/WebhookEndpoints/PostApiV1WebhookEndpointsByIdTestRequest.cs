using System;
using Deliverd.Models;

namespace Deliverd.Requests.WebhookEndpoints;

/// <summary>
/// The inputs of the PostApiV1WebhookEndpointsByIdTest operation.
/// </summary>
public sealed record PostApiV1WebhookEndpointsByIdTestRequest
{
    /// <summary>
    /// The endpoint
    /// </summary>
    public required Guid Id { get; init; }

    public ApiV1WebhookEndpointsTestRequest? Body { get; init; }
}
