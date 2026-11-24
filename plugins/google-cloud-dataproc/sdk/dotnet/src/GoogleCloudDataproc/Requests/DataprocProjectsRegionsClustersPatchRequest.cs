using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsClustersPatch operation.
/// </summary>
public sealed record DataprocProjectsRegionsClustersPatchRequest
{
    /// <summary>
    /// Required. The ID of the Google Cloud Platform project the cluster belongs to.
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// Required. The region in which to handle the request.
    /// </summary>
    public required string Region { get; init; }

    /// <summary>
    /// Required. The cluster name.
    /// </summary>
    public required string ClusterName { get; init; }

    /// <summary>
    /// Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Supported in image versions 1.2 and higher.
    /// </summary>
    public string? GracefulDecommissionTimeout { get; init; }

    /// <summary>
    /// Optional. A unique ID used to identify the request. If the server receives two UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
    /// </summary>
    public string? RequestId { get; init; }

    /// <summary>
    /// Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } *Note:* Currently, only the following fields can be updated: *Mask* *Purpose* *labels* Update labels *config.worker_config.num_instances* Resize primary worker group *config.secondary_worker_config.num_instances* Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies
    /// </summary>
    public string? UpdateMask { get; init; }

    public required Cluster Body { get; init; }
}
