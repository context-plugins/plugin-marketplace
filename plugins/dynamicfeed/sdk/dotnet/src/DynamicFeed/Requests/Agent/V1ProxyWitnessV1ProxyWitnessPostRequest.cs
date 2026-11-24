using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1ProxyWitnessV1ProxyWitnessPost operation.
/// </summary>
public sealed record V1ProxyWitnessV1ProxyWitnessPostRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
