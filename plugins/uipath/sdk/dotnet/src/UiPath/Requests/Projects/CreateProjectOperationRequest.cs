using UiPath.Models;

namespace UiPath.Requests.Projects;

/// <summary>
/// The inputs of the CreateProject operation.
/// </summary>
public sealed record CreateProjectOperationRequest
{
    public required CreateProjectRequest Body { get; init; }
}
