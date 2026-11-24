using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Benchmarks;

/// <summary>
/// The inputs of the BenchmarksHistoryBenchmarksHistoryGet operation.
/// </summary>
public sealed record BenchmarksHistoryBenchmarksHistoryGetRequest
{
    /// <summary>
    /// filter to one provider, e.g. openai (optional)
    /// </summary>
    public string Provider { get; init; } = "";

    /// <summary>
    /// lookback in days
    /// </summary>
    [Minimum(1)]
    [Maximum(1825)]
    public int Days { get; init; } = 90;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
