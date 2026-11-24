namespace Basiq.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobs operation.
/// </summary>
public sealed record GetJobsRequest
{
    /// <summary>
    /// The identifier of the job to be retrieved.
    /// </summary>
    public required string JobId { get; init; }
}
