namespace Buildkite.Requests.Builds;

/// <summary>
/// The inputs of the GetBuild operation.
/// </summary>
public sealed record GetBuildRequest
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
