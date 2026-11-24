namespace Rendex.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobStatus operation.
/// </summary>
public sealed record GetJobStatusRequest
{
    /// <summary>
    /// Async job identifier (returned when <c>async: true</c>)
    /// </summary>
    public required string JobId { get; init; }
}
