namespace BrowserStack.Requests.Projects;

/// <summary>
/// The inputs of the GetProjectBadgeKey operation.
/// </summary>
public sealed record GetProjectBadgeKeyRequest
{
    public required int ProjectId { get; init; }
}
