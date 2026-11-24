using DevCycle.Models;

namespace DevCycle.Requests.Metrics;

/// <summary>
/// The inputs of the MetricsControllerCreate operation.
/// </summary>
public sealed record MetricsControllerCreateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateMetricDto Body { get; init; }
}
