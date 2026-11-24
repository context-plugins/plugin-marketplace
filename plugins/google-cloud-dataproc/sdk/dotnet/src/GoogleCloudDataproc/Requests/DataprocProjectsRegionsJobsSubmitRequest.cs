using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsJobsSubmit operation.
/// </summary>
public sealed record DataprocProjectsRegionsJobsSubmitRequest
{
    /// <summary>
    /// Required. The ID of the Google Cloud Platform project that the job belongs to.
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// Required. The Dataproc region in which to handle the request.
    /// </summary>
    public required string Region { get; init; }

    public required SubmitJobRequest Body { get; init; }
}
