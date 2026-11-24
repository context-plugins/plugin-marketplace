using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.WeatherAlerts;

/// <summary>
/// The inputs of the WeatherAlertsWeatherAlertsGet operation.
/// </summary>
public sealed record WeatherAlertsWeatherAlertsGetRequest
{
    /// <summary>
    /// 2-letter US state (CA, TX...) or marine zone; blank = nationwide Severe/Extreme
    /// </summary>
    public string Area { get; init; } = "";

    /// <summary>
    /// filter by event type, e.g. Flood, Tornado, Heat
    /// </summary>
    public string Event { get; init; } = "";

    [Minimum(1)]
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
