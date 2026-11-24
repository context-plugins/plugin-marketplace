namespace DevCycle.Requests.Overrides;

/// <summary>
/// The inputs of the OverridesControllerFindOverridesForFeature operation.
/// </summary>
public sealed record OverridesControllerFindOverridesForFeatureRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public bool? AddMetadata { get; init; }

    /// <summary>
    /// A Environment key or ID
    /// </summary>
    public string? Environment { get; init; }
}
