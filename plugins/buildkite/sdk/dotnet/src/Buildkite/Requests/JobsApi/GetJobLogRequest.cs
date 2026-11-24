namespace Buildkite.Requests.JobsApi;

/// <summary>
/// The inputs of the GetJobLog operation.
/// </summary>
public sealed record GetJobLogRequest
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

    /// <summary>
    /// Job UUID
    /// </summary>
    public required string Job { get; init; }
}
