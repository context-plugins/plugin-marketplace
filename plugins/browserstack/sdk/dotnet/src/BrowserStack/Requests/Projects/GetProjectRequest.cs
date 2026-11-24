namespace BrowserStack.Requests.Projects;

/// <summary>
/// The inputs of the GetProject operation.
/// </summary>
public sealed record GetProjectRequest
{
    public required int ProjectId { get; init; }
}
