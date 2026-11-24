using Contentstack.Models;

namespace Contentstack.Requests.Projects;

/// <summary>
/// The inputs of the UpdateProject operation.
/// </summary>
public sealed record UpdateProjectRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The unique identifier of the automation project.
    /// </summary>
    public required string ProjectUid { get; init; }

    public required CreateProjectRequest Body { get; init; }
}
