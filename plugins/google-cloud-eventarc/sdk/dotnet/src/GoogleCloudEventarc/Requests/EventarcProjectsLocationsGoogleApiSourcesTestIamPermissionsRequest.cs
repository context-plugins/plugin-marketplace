using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsGoogleApiSourcesTestIamPermissions operation.
/// </summary>
public sealed record EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest
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

    public required TestIamPermissionsRequest Body { get; init; }
}
