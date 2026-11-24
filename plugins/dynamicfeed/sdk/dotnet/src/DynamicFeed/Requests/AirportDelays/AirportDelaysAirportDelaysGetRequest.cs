using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.AirportDelays;

/// <summary>
/// The inputs of the AirportDelaysAirportDelaysGet operation.
/// </summary>
public sealed record AirportDelaysAirportDelaysGetRequest
{
    /// <summary>
    /// 3-letter airport code, e.g. LGA, LAX (optional)
    /// </summary>
    public string Airport { get; init; } = "";

    [Maximum(200)]
    public int Limit { get; init; } = 60;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
