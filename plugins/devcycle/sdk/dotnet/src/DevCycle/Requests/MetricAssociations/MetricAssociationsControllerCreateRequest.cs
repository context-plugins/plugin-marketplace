using DevCycle.Models;

namespace DevCycle.Requests.MetricAssociations;

/// <summary>
/// The inputs of the MetricAssociationsControllerCreate operation.
/// </summary>
public sealed record MetricAssociationsControllerCreateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateMetricAssociationDto Body { get; init; }
}
