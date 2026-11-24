using DevCycle.Models;

namespace DevCycle.Requests.Variations;

/// <summary>
/// The inputs of the VariationsControllerUpdate operation.
/// </summary>
public sealed record VariationsControllerUpdateRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateFeatureVariationDto Body { get; init; }
}
