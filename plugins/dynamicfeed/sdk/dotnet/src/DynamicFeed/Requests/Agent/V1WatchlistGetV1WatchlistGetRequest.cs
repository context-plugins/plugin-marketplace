using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1WatchlistGetV1WatchlistGet operation.
/// </summary>
public sealed record V1WatchlistGetV1WatchlistGetRequest
{
    public bool Pull { get; init; } = false;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
