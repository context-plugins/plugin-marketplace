using DevCycle.Models;

namespace DevCycle.Requests.FeaturesV2;

/// <summary>
/// The inputs of the FeaturesControllerCreate operation.
/// </summary>
public sealed record FeaturesControllerCreateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateFeatureDto Body { get; init; }
}
