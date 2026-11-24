using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1WatchlistDeleteV1WatchlistDelete operation.
/// </summary>
public sealed record V1WatchlistDeleteV1WatchlistDeleteRequest
{
    public string Label { get; init; } = "";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
