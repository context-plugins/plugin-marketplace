namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsJobsCancel operation.
/// </summary>
public sealed record DataprocProjectsRegionsJobsCancelRequest
{
    /// <summary>
    /// Required. The ID of the Google Cloud Platform project that the job belongs to.
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// Required. The Dataproc region in which to handle the request.
    /// </summary>
    public required string Region { get; init; }

    /// <summary>
    /// Required. The job ID.
    /// </summary>
    public required string JobId { get; init; }

    public required object Body { get; init; }
}
