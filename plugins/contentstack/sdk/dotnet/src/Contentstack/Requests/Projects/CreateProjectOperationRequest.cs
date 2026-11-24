using Contentstack.Models;

namespace Contentstack.Requests.Projects;

/// <summary>
/// The inputs of the CreateProject operation.
/// </summary>
public sealed record CreateProjectOperationRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    public required CreateProjectRequest Body { get; init; }
}
