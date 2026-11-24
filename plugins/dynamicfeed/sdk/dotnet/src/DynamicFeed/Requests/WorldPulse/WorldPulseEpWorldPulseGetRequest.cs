using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.WorldPulse;

/// <summary>
/// The inputs of the WorldPulseEpWorldPulseGet operation.
/// </summary>
public sealed record WorldPulseEpWorldPulseGetRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
