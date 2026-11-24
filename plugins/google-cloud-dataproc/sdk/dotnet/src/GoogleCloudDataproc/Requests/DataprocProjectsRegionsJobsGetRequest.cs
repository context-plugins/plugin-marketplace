namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsJobsGet operation.
/// </summary>
public sealed record DataprocProjectsRegionsJobsGetRequest
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
}
