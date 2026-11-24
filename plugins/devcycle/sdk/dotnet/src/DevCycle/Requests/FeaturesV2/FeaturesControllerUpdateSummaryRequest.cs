using DevCycle.Models;

namespace DevCycle.Requests.FeaturesV2;

/// <summary>
/// The inputs of the FeaturesControllerUpdateSummary operation.
/// </summary>
public sealed record FeaturesControllerUpdateSummaryRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateFeatureSummaryDto Body { get; init; }
}
