using Deliverd.Models;

namespace Deliverd.Requests.WebhookEndpoints;

/// <summary>
/// The inputs of the PostApiV1WebhookEndpoints operation.
/// </summary>
public sealed record PostApiV1WebhookEndpointsRequest
{
    public ApiV1WebhookEndpointsRequest? Body { get; init; }
}
