using DevCycle.Models;

namespace DevCycle.Requests.Projects;

/// <summary>
/// The inputs of the ProjectsControllerUpdateSettings operation.
/// </summary>
public sealed record ProjectsControllerUpdateSettingsRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Key { get; init; }

    public required UpdateProjectSettingsDto Body { get; init; }
}
