using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Shipping;

/// <summary>
/// The inputs of the ShippingEpShippingGet operation.
/// </summary>
public sealed record ShippingEpShippingGetRequest
{
    /// <summary>
    /// chokepoints | ports | vessels
    /// </summary>
    public string Scope { get; init; } = "chokepoints";

    /// <summary>
    /// filter by name/country (chokepoints, ports) or ship name/destination (vessels)
    /// </summary>
    public string Query { get; init; } = "";

    /// <summary>
    /// Baltic preset for scope=vessels: baltic, helsinki, stockholm, kiel, gdansk, copenhagen, riga, gulf-of-finland
    /// </summary>
    public string Region { get; init; } = "baltic";

    [Maximum(100)]
    public int Limit { get; init; } = 30;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
