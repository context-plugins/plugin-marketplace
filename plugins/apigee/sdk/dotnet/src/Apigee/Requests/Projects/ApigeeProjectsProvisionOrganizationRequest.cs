using Apigee.Models;

namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApigeeProjectsProvisionOrganization operation.
/// </summary>
public sealed record ApigeeProjectsProvisionOrganizationRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    public required GoogleCloudApigeeV1ProvisionOrganizationRequest Body { get; init; }
}
