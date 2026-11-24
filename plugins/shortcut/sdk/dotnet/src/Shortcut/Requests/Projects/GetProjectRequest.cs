namespace Shortcut.Requests.Projects;

/// <summary>
/// The inputs of the GetProject operation.
/// </summary>
public sealed record GetProjectRequest
{
    /// <summary>
    /// The unique ID of the Project.
    /// </summary>
    public required long ProjectPublicId { get; init; }
}
