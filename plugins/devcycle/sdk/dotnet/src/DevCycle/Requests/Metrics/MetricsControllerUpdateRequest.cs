using DevCycle.Models;

namespace DevCycle.Requests.Metrics;

/// <summary>
/// The inputs of the MetricsControllerUpdate operation.
/// </summary>
public sealed record MetricsControllerUpdateRequest
{
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateMetricDto Body { get; init; }
}
