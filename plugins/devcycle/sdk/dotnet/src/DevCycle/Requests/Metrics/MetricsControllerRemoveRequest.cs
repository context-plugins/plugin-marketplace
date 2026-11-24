namespace DevCycle.Requests.Metrics;

/// <summary>
/// The inputs of the MetricsControllerRemove operation.
/// </summary>
public sealed record MetricsControllerRemoveRequest
{
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
