using DevCycle.Models;

namespace DevCycle.Requests.Variations;

/// <summary>
/// The inputs of the VariationsControllerCreate operation.
/// </summary>
public sealed record VariationsControllerCreateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    public required FeatureVariationDto Body { get; init; }
}
