using DevCycle.Models;

namespace DevCycle.Requests.FeatureConfigurations;

/// <summary>
/// The inputs of the FeatureConfigsControllerUpdate operation.
/// </summary>
public sealed record FeatureConfigsControllerUpdateRequest
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

    public required UpdateFeatureConfigDto Body { get; init; }
}
