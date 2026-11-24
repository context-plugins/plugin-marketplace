using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsJobsPatch operation.
/// </summary>
public sealed record DataprocProjectsRegionsJobsPatchRequest
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

    /// <summary>
    /// Required. Specifies the path, relative to Job, of the field to update. For example, to update the labels of a Job the update_mask parameter would be specified as labels, and the PATCH request body would specify the new value. *Note:* Currently, labels is the only field that can be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required Job Body { get; init; }
}
