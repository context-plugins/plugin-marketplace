using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1MeV1MeGet operation.
/// </summary>
public sealed record V1MeV1MeGetRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
