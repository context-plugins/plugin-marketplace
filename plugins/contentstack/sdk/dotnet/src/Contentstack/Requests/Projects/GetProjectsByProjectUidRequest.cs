namespace Contentstack.Requests.Projects;

/// <summary>
/// The inputs of the GetProjectsByProjectUid operation.
/// </summary>
public sealed record GetProjectsByProjectUidRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }
}
