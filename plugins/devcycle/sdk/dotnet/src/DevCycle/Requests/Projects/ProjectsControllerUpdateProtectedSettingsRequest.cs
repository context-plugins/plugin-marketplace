using DevCycle.Models;

namespace DevCycle.Requests.Projects;

/// <summary>
/// The inputs of the ProjectsControllerUpdateProtectedSettings operation.
/// </summary>
public sealed record ProjectsControllerUpdateProtectedSettingsRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Key { get; init; }

    public required UpdateProtectedProjectSettingsDto Body { get; init; }
}
