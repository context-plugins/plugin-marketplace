using DevCycle.Models;

namespace DevCycle.Requests.Projects;

/// <summary>
/// The inputs of the ProjectsControllerCreate operation.
/// </summary>
public sealed record ProjectsControllerCreateRequest
{
    public required CreateProjectDto Body { get; init; }
}
