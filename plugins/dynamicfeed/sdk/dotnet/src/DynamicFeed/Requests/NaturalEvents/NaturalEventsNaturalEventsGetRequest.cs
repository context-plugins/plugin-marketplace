using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.NaturalEvents;

/// <summary>
/// The inputs of the NaturalEventsNaturalEventsGet operation.
/// </summary>
public sealed record NaturalEventsNaturalEventsGetRequest
{
    /// <summary>
    /// wildfires | severeStorms | volcanoes | floods | seaLakeIce
    /// </summary>
    public Category? Category { get; init; }

    /// <summary>
    /// look-back window in days
    /// </summary>
    [Minimum(1)]
    [Maximum(365)]
    public int Days { get; init; } = 30;

    [Maximum(100)]
    public int Limit { get; init; } = 30;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
