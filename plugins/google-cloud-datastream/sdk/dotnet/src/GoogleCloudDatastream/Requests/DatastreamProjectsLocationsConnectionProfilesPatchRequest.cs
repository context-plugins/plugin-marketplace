using GoogleCloudDatastream.Models;

namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsConnectionProfilesPatch operation.
/// </summary>
public sealed record DatastreamProjectsLocationsConnectionProfilesPatchRequest
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
    /// Resource name segment (connectionProfilesId).
    /// </summary>
    public required string ConnectionProfilesId { get; init; }

    /// <summary>
    /// Optional. Update the connection profile without validating it.
    /// </summary>
    public bool? Force { get; init; }

    /// <summary>
    /// Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    /// </summary>
    public string? RequestId { get; init; }

    /// <summary>
    /// Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
    /// </summary>
    public string? UpdateMask { get; init; }

    /// <summary>
    /// Optional. Only validate the connection profile, but don't update any resources. The default is false.
    /// </summary>
    public bool? ValidateOnly { get; init; }

    public required ConnectionProfile Body { get; init; }
}
