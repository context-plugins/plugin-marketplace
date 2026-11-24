namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsGoogleApiSourcesDelete operation.
/// </summary>
public sealed record EventarcProjectsLocationsGoogleApiSourcesDeleteRequest
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
    /// Resource name segment (googleApiSourcesId).
    /// </summary>
    public required string GoogleApiSourcesId { get; init; }

    /// <summary>
    /// Optional. If set to true, and the GoogleApiSource is not found, the request will succeed but no action will be taken on the server.
    /// </summary>
    public bool? AllowMissing { get; init; }

    /// <summary>
    /// Optional. If provided, the GoogleApiSource will only be deleted if the etag matches the current etag on the resource.
    /// </summary>
    public string? Etag { get; init; }

    /// <summary>
    /// Optional. If set, validate the request and preview the review, but do not post it.
    /// </summary>
    public bool? ValidateOnly { get; init; }
}
