using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsGoogleApiSourcesSetIamPolicy operation.
/// </summary>
public sealed record EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest
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

    public required SetIamPolicyRequest Body { get; init; }
}
