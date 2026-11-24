using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Wildfires;

/// <summary>
/// The inputs of the WildfiresWildfiresGet operation.
/// </summary>
public sealed record WildfiresWildfiresGetRequest
{
    /// <summary>
    /// filter to a US state, e.g. CA, TX (2-letter)
    /// </summary>
    public State? State { get; init; }

    /// <summary>
    /// only fires below 100% containment
    /// </summary>
    public bool OnlyUncontained { get; init; } = false;

    /// <summary>
    /// minimum incident size in acres
    /// </summary>
    [Minimum(0.0)]
    public double MinAcres { get; init; } = 0d;

    [Maximum(100)]
    public int Limit { get; init; } = 25;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
