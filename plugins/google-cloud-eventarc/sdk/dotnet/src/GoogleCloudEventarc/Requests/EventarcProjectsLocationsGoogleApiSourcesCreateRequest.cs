using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsGoogleApiSourcesCreate operation.
/// </summary>
public sealed record EventarcProjectsLocationsGoogleApiSourcesCreateRequest
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
    /// Required. The user-provided ID to be assigned to the GoogleApiSource. It should match the format <c>^<see href="[a-z0-9-]{0,61}[a-z0-9]">a-z</see>?$</c>.
    /// </summary>
    public string? GoogleApiSourceId { get; init; }

    /// <summary>
    /// Optional. If set, validate the request and preview the review, but do not post it.
    /// </summary>
    public bool? ValidateOnly { get; init; }

    public required GoogleApiSource Body { get; init; }
}
