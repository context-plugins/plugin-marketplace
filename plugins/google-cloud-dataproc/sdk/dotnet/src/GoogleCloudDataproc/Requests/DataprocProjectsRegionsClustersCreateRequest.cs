using GoogleCloudDataproc.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsClustersCreate operation.
/// </summary>
public sealed record DataprocProjectsRegionsClustersCreateRequest
{
    /// <summary>
    /// Required. The ID of the Google Cloud Platform project that the cluster belongs to.
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// Required. The region in which to handle the request.
    /// </summary>
    public required string Region { get; init; }

    /// <summary>
    /// Optional. Failure action when primary worker creation fails.
    /// </summary>
    public ActionOnFailedPrimaryWorkers? ActionOnFailedPrimaryWorkers { get; init; }

    /// <summary>
    /// Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
    /// </summary>
    public string? RequestId { get; init; }

    public required Cluster Body { get; init; }
}
