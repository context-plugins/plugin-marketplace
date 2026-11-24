using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Energy;

/// <summary>
/// The inputs of the EnergyGridEnergyGet operation.
/// </summary>
public sealed record EnergyGridEnergyGetRequest
{
    /// <summary>
    /// US48 (national) or a grid operator: CAISO, PJM, MISO, ERCOT, ISONE, NYISO, SPP, BPA
    /// </summary>
    public string Region { get; init; } = "US48";

    /// <summary>
    /// demand | generation | mix
    /// </summary>
    public string Metric { get; init; } = "demand";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
