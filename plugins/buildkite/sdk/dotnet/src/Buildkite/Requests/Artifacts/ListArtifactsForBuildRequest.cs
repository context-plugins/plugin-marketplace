namespace Buildkite.Requests.Artifacts;

/// <summary>
/// The inputs of the ListArtifactsForBuild operation.
/// </summary>
public sealed record ListArtifactsForBuildRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }

    /// <summary>
    /// Pipeline slug
    /// </summary>
    public required string Pipeline { get; init; }

    /// <summary>
    /// Build number
    /// </summary>
    public required int Number { get; init; }
}
