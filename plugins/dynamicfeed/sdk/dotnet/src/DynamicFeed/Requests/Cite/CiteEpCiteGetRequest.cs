using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Cite;

/// <summary>
/// The inputs of the CiteEpCiteGet operation.
/// </summary>
public sealed record CiteEpCiteGetRequest
{
    /// <summary>
    /// any tool/source/topic (earthquakes, USGS, Open-Meteo, ...) or a software product — returns a citeable source + verify URL + timestamp
    /// </summary>
    public string Subject { get; init; } = "";

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
