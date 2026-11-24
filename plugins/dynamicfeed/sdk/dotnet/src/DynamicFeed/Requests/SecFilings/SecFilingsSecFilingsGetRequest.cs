using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.SecFilings;

/// <summary>
/// The inputs of the SecFilingsSecFilingsGet operation.
/// </summary>
public sealed record SecFilingsSecFilingsGetRequest
{
    /// <summary>
    /// US stock ticker, e.g. AAPL, NVDA, TSLA
    /// </summary>
    public string Ticker { get; init; } = "";

    /// <summary>
    /// filter by form: 8-K, 10-K, 10-Q, S-1, 4 ...
    /// </summary>
    public string Form { get; init; } = "";

    [Minimum(1)]
    [Maximum(40)]
    public int Limit { get; init; } = 15;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
