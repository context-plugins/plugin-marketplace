namespace DevCycle.Requests.Metrics;

/// <summary>
/// The inputs of the MetricsControllerFindOne operation.
/// </summary>
public sealed record MetricsControllerFindOneRequest
{
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
