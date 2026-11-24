namespace Buildkite.Requests.Builds;

/// <summary>
/// The inputs of the CreateBuild operation.
/// </summary>
public sealed record CreateBuildRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }

    /// <summary>
    /// Pipeline slug
    /// </summary>
    public required string Pipeline { get; init; }
}
