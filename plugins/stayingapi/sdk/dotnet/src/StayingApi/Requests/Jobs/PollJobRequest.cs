namespace StayingApi.Requests.Jobs;

/// <summary>
/// The inputs of the PollJob operation.
/// </summary>
public sealed record PollJobRequest
{
    /// <summary>
    /// job_-prefixed id.
    /// </summary>
    public required string JobId { get; init; }
}
