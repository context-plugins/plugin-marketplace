using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsHostProjectRegistrationsCreate operation.
/// </summary>
public sealed record ApihubProjectsLocationsHostProjectRegistrationsCreateRequest
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
    /// Required. The ID to use for the Host Project Registration, which will become the final component of the host project registration's resource name. The ID must be the same as the Google cloud project specified in the host_project_registration.gcp_project field.
    /// </summary>
    public string? HostProjectRegistrationId { get; init; }

    public required GoogleCloudApihubV1HostProjectRegistration Body { get; init; }
}
