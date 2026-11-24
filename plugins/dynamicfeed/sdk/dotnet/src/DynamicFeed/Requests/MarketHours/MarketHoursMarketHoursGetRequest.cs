using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.MarketHours;

/// <summary>
/// The inputs of the MarketHoursMarketHoursGet operation.
/// </summary>
public sealed record MarketHoursMarketHoursGetRequest
{
    /// <summary>
    /// NYSE, NASDAQ, LSE, XETRA, TSE, HKEX, ASX, Crypto, Forex
    /// </summary>
    public Market? Market { get; init; }

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
