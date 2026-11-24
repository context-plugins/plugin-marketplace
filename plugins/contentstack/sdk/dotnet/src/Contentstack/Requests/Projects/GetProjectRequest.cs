namespace Contentstack.Requests.Projects;

/// <summary>
/// The inputs of the GetProject operation.
/// </summary>
public sealed record GetProjectRequest
{
    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The unique identifier of the automation project.
    /// </summary>
    public required string ProjectUid { get; init; }
}
