namespace DevCycle.Requests.FeatureConfigurations;

/// <summary>
/// The inputs of the FeatureConfigsControllerFindAll operation.
/// </summary>
public sealed record FeatureConfigsControllerFindAllRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    /// <summary>
    /// A Environment key or ID
    /// </summary>
    public string? Environment { get; init; }
}
