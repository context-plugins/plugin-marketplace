namespace DevCycle.Requests.MetricAssociations;

/// <summary>
/// The inputs of the MetricAssociationsControllerFindAll operation.
/// </summary>
public sealed record MetricAssociationsControllerFindAllRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public string? Metric { get; init; }

    public string? Feature { get; init; }
}
