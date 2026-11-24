using DevCycle.Models;

namespace DevCycle.Requests.Projects;

/// <summary>
/// The inputs of the ProjectsControllerUpdate operation.
/// </summary>
public sealed record ProjectsControllerUpdateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Key { get; init; }

    public required UpdateProjectDto Body { get; init; }
}
