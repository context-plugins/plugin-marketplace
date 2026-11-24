using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1WebhooksDeleteV1WebhooksDelete operation.
/// </summary>
public sealed record V1WebhooksDeleteV1WebhooksDeleteRequest
{
    public int Id { get; init; } = 0;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
