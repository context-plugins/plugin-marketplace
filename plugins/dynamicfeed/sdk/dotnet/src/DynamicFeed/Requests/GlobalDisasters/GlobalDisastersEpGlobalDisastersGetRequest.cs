using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.GlobalDisasters;

/// <summary>
/// The inputs of the GlobalDisastersEpGlobalDisastersGet operation.
/// </summary>
public sealed record GlobalDisastersEpGlobalDisastersGetRequest
{
    /// <summary>
    /// Green;Orange;Red (semicolon-separated)
    /// </summary>
    public string AlertLevel { get; init; } = "Orange;Red";

    /// <summary>
    /// EQ | TC | FL | DR | VO | WF
    /// </summary>
    public EventType? EventType { get; init; }

    /// <summary>
    /// country name or ISO3 (e.g. PHL)
    /// </summary>
    public Country? Country { get; init; }

    /// <summary>
    /// look-back window in days
    /// </summary>
    [Minimum(1)]
    [Maximum(90)]
    public int Days { get; init; } = 7;

    [Maximum(100)]
    public int Limit { get; init; } = 50;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
