using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Dev;

/// <summary>
/// The inputs of the HackerNewsEpHackerNewsGet operation.
/// </summary>
public sealed record HackerNewsEpHackerNewsGetRequest
{
    public string Query { get; init; } = "";

    /// <summary>
    /// top | new | best
    /// </summary>
    public string Kind { get; init; } = "top";

    /// <summary>
    /// max stories (1-30)
    /// </summary>
    public int Limit { get; init; } = 10;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
