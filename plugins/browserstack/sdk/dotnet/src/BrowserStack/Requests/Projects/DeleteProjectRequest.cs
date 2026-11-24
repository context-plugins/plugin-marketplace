namespace BrowserStack.Requests.Projects;

/// <summary>
/// The inputs of the DeleteProject operation.
/// </summary>
public sealed record DeleteProjectRequest
{
    public required int ProjectId { get; init; }
}
