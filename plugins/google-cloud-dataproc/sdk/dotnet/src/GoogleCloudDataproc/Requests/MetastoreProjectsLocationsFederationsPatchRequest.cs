using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsFederationsPatch operation.
/// </summary>
public sealed record MetastoreProjectsLocationsFederationsPatchRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Resource name segment (federationsId).
    /// </summary>
    public required string FederationsId { get; init; }

    /// <summary>
    /// Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
    /// </summary>
    public string? RequestId { get; init; }

    /// <summary>
    /// Required. A field mask used to specify the fields to be overwritten in the metastore federation resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required Federation Body { get; init; }
}
