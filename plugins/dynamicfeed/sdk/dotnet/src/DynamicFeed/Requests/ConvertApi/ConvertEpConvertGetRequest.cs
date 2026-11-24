using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.ConvertApi;

/// <summary>
/// The inputs of the ConvertEpConvertGet operation.
/// </summary>
public sealed record ConvertEpConvertGetRequest
{
    /// <summary>
    /// amount to convert
    /// </summary>
    public double Amount { get; init; } = 1d;

    /// <summary>
    /// e.g. EUR, GBP, JPY
    /// </summary>
    public string FromCurrency { get; init; } = "USD";

    /// <summary>
    /// e.g. USD, AUD, CHF
    /// </summary>
    public string ToCurrency { get; init; } = "USD";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
