using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Rates;

/// <summary>
/// The inputs of the RatesRatesGet operation.
/// </summary>
public sealed record RatesRatesGetRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
