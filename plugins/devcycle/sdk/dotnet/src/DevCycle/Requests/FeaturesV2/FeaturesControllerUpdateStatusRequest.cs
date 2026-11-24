using DevCycle.Models;

namespace DevCycle.Requests.FeaturesV2;

/// <summary>
/// The inputs of the FeaturesControllerUpdateStatus operation.
/// </summary>
public sealed record FeaturesControllerUpdateStatusRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateFeatureStatusDto Body { get; init; }
}
