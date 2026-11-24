using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsEnrollmentsPatch operation.
/// </summary>
public sealed record EventarcProjectsLocationsEnrollmentsPatchRequest
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
    /// Optional. If set to true, and the Enrollment is not found, a new Enrollment will be created. In this situation, <c>update_mask</c> is ignored.
    /// </summary>
    public bool? AllowMissing { get; init; }

    /// <summary>
    /// Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
    /// </summary>
    public string? UpdateMask { get; init; }

    /// <summary>
    /// Optional. If set, validate the request and preview the review, but do not post it.
    /// </summary>
    public bool? ValidateOnly { get; init; }

    public required Enrollment Body { get; init; }
}
