using DevCycle.Models;

namespace DevCycle.Requests.DeprecatedFeaturesV1;

/// <summary>
/// The inputs of the FeaturesControllerUpdateV1 operation.
/// </summary>
public sealed record FeaturesControllerUpdateV1Request
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateFeatureDto Body { get; init; }
}
