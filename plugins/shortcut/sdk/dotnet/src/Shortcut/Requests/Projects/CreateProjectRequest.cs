using Shortcut.Models;

namespace Shortcut.Requests.Projects;

/// <summary>
/// The inputs of the CreateProject operation.
/// </summary>
public sealed record CreateProjectRequest
{
    public required CreateProject Body { get; init; }
}
