using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.OrbitalDatacenters;

/// <summary>
/// The inputs of the OrbitalDatacentersOrbitalDatacentersGet operation.
/// </summary>
public sealed record OrbitalDatacentersOrbitalDatacentersGetRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
