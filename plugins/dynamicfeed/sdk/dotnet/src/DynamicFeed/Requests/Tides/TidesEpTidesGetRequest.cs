using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Tides;

/// <summary>
/// The inputs of the TidesEpTidesGet operation.
/// </summary>
public sealed record TidesEpTidesGetRequest
{
    /// <summary>
    /// NOAA station id, e.g. 9414290
    /// </summary>
    public string Station { get; init; } = "";

    /// <summary>
    /// or a preset: san francisco, new york, boston, seattle, honolulu, …
    /// </summary>
    public string Location { get; init; } = "";

    /// <summary>
    /// english (feet) | metric
    /// </summary>
    public string Units { get; init; } = "english";

    [Maximum(20)]
    public int Limit { get; init; } = 6;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
