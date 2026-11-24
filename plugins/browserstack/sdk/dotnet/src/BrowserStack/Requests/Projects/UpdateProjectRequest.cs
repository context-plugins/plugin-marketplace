using BrowserStack.Models;

namespace BrowserStack.Requests.Projects;

/// <summary>
/// The inputs of the UpdateProject operation.
/// </summary>
public sealed record UpdateProjectRequest
{
    public required int ProjectId { get; init; }

    public required AutomateProjectsJsonRequest Body { get; init; }
}
