using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.RealityCheck;

/// <summary>
/// The inputs of the RealityCheckEpRealityCheckGet operation.
/// </summary>
public sealed record RealityCheckEpRealityCheckGetRequest
{
    /// <summary>
    /// a statement to verify, e.g. "BTC is $90,000" or "the market is open"
    /// </summary>
    public string Claim { get; init; } = "";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
