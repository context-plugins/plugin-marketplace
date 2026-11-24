using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsClustersNodeGroupsCreate operation.
/// </summary>
public sealed record DataprocProjectsRegionsClustersNodeGroupsCreateRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (regionsId).
    /// </summary>
    public required string RegionsId { get; init; }

    /// <summary>
    /// Resource name segment (clustersId).
    /// </summary>
    public required string ClustersId { get; init; }

    /// <summary>
    /// Optional. An optional node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
    /// </summary>
    public string? NodeGroupId { get; init; }

    /// <summary>
    /// Optional. operation id of the parent operation sending the create request
    /// </summary>
    public string? ParentOperationId { get; init; }

    /// <summary>
    /// Optional. A unique ID used to identify the request. If the server receives two CreateNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateNodeGroupRequest) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
    /// </summary>
    public string? RequestId { get; init; }

    public required NodeGroup Body { get; init; }
}
