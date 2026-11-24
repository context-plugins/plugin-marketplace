using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1WebhooksListV1WebhooksGet operation.
/// </summary>
public sealed record V1WebhooksListV1WebhooksGetRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
