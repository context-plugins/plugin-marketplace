namespace Contentstack.Requests.Projects;

/// <summary>
/// The inputs of the GetAllProjects operation.
/// </summary>
public sealed record GetAllProjectsRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }
}
