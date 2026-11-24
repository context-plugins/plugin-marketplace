using DevCycle.Models;

namespace DevCycle.Requests.DeprecatedFeaturesV1;

/// <summary>
/// The inputs of the FeaturesControllerCreateV1 operation.
/// </summary>
public sealed record FeaturesControllerCreateV1Request
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateFeatureDto Body { get; init; }
}
