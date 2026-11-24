using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Signals;

/// <summary>
/// The inputs of the SignalsSignalsGet operation.
/// </summary>
public sealed record SignalsSignalsGetRequest
{
    /// <summary>
    /// instrument symbol, e.g. BTC, ETH, XAU, EURUSD
    /// </summary>
    public required string Symbol { get; init; }

    /// <summary>
    /// window
    /// </summary>
    [Minimum(1)]
    [Maximum(720)]
    public int Hours { get; init; } = 24;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
