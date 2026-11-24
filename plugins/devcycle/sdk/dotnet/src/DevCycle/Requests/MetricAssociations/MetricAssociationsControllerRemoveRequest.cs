namespace DevCycle.Requests.MetricAssociations;

/// <summary>
/// The inputs of the MetricAssociationsControllerRemove operation.
/// </summary>
public sealed record MetricAssociationsControllerRemoveRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required string Metric { get; init; }

    public required string Feature { get; init; }
}
