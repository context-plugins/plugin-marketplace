using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Benchmarks;

/// <summary>
/// The inputs of the BenchmarksBenchmarksGet operation.
/// </summary>
public sealed record BenchmarksBenchmarksGetRequest
{
    /// <summary>
    /// rolling window in hours
    /// </summary>
    [Minimum(1)]
    [Maximum(720)]
    public int WindowHours { get; init; } = 24;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
