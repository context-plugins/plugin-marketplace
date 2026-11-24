using Shortcut.Models;

namespace Shortcut.Requests.Projects;

/// <summary>
/// The inputs of the UpdateProject operation.
/// </summary>
public sealed record UpdateProjectRequest
{
    /// <summary>
    /// The unique ID of the Project.
    /// </summary>
    public required long ProjectPublicId { get; init; }

    public required UpdateProject Body { get; init; }
}
