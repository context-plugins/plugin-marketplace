using DevCycle.Models;

namespace DevCycle.Requests.Overrides;

/// <summary>
/// The inputs of the OverridesControllerUpdateFeatureOverride operation.
/// </summary>
public sealed record OverridesControllerUpdateFeatureOverrideRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateOverrideDto Body { get; init; }
}
