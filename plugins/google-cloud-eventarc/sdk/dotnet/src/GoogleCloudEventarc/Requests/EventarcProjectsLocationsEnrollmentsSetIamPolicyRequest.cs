using GoogleCloudEventarc.Models;

namespace GoogleCloudEventarc.Requests;

/// <summary>
/// The inputs of the EventarcProjectsLocationsEnrollmentsSetIamPolicy operation.
/// </summary>
public sealed record EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest
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

    public required SetIamPolicyRequest Body { get; init; }
}
