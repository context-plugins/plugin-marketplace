namespace Shortcut.Requests.Projects;

/// <summary>
/// The inputs of the DeleteProject operation.
/// </summary>
public sealed record DeleteProjectRequest
{
    /// <summary>
    /// The unique ID of the Project.
    /// </summary>
    public required long ProjectPublicId { get; init; }
}
