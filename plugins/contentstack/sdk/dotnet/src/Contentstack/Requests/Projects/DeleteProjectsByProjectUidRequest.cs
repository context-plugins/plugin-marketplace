namespace Contentstack.Requests.Projects;

/// <summary>
/// The inputs of the DeleteProjectsByProjectUid operation.
/// </summary>
public sealed record DeleteProjectsByProjectUidRequest
{
    /// <summary>
    /// The unique identifier of the Launch project.
    /// </summary>
    public required string ProjectUid { get; init; }
}
