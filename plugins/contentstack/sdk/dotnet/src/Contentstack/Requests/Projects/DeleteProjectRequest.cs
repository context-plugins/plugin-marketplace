namespace Contentstack.Requests.Projects;

/// <summary>
/// The inputs of the DeleteProject operation.
/// </summary>
public sealed record DeleteProjectRequest
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
