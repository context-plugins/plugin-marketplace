using System;
using DevCycle.Models.Enums;

namespace DevCycle.Requests.Metrics;

/// <summary>
/// The inputs of the TestMetricResultsControllerFetch operation.
/// </summary>
public sealed record TestMetricResultsControllerFetchRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required string Feature { get; init; }

    public required string Control { get; init; }

    public required Optimize3 Optimize { get; init; }

    public required string Event { get; init; }

    public required Dimension3 Dimension { get; init; }

    public required DateTimeOffset StartDate { get; init; }

    public required DateTimeOffset EndDate { get; init; }

    public string? Environment { get; init; }
}
