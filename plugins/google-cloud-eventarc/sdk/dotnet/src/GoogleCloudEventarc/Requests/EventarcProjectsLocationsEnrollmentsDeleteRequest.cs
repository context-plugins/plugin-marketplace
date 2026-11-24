namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsEnrollmentsDelete operation.
/// </summary>
public sealed record EventarcProjectsLocationsEnrollmentsDeleteRequest
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
    /// Resource name segment (enrollmentsId).
    /// </summary>
    public required string EnrollmentsId { get; init; }

    /// <summary>
    /// Optional. If set to true, and the Enrollment is not found, the request will succeed but no action will be taken on the server.
    /// </summary>
    public bool? AllowMissing { get; init; }

    /// <summary>
    /// Optional. If provided, the Enrollment will only be deleted if the etag matches the current etag on the resource.
    /// </summary>
    public string? Etag { get; init; }

    /// <summary>
    /// Optional. If set, validate the request and preview the review, but do not post it.
    /// </summary>
    public bool? ValidateOnly { get; init; }
}
