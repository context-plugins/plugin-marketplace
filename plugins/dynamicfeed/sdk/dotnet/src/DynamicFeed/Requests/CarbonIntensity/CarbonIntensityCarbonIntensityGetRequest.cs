using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.CarbonIntensity;

/// <summary>
/// The inputs of the CarbonIntensityCarbonIntensityGet operation.
/// </summary>
public sealed record CarbonIntensityCarbonIntensityGetRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
