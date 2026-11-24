using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.WaterLevels;

/// <summary>
/// The inputs of the WaterLevelsWaterLevelsGet operation.
/// </summary>
public sealed record WaterLevelsWaterLevelsGetRequest
{
    /// <summary>
    /// 2-letter US state code, e.g. TX, CA (optional)
    /// </summary>
    public string State { get; init; } = "";

    /// <summary>
    /// USGS site number(s), comma-separated (optional)
    /// </summary>
    public string Site { get; init; } = "";

    [Maximum(100)]
    public int Limit { get; init; } = 20;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
