namespace DevCycle.Requests.Overrides;

/// <summary>
/// The inputs of the OverridesControllerDeleteOverridesForFeature operation.
/// </summary>
public sealed record OverridesControllerDeleteOverridesForFeatureRequest
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
    public required string Environment { get; init; }
}
