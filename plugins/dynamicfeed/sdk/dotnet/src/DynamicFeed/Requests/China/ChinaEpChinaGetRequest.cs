using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.China;

/// <summary>
/// The inputs of the ChinaEpChinaGet operation.
/// </summary>
public sealed record ChinaEpChinaGetRequest
{
    /// <summary>
    /// all | indices | fx | etfs | macro
    /// </summary>
    public string Metric { get; init; } = "all";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
