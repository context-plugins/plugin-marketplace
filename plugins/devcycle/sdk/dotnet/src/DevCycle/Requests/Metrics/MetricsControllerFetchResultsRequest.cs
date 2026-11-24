using System;

namespace DevCycle.Requests.Metrics;

/// <summary>
/// The inputs of the MetricsControllerFetchResults operation.
/// </summary>
public sealed record MetricsControllerFetchResultsRequest
{
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required string Feature { get; init; }

    public required DateTimeOffset StartDate { get; init; }

    public required DateTimeOffset EndDate { get; init; }

    public string? Environment { get; init; }
}
