namespace BrowserStack.Requests.Sessions;

/// <summary>
/// The inputs of the ListBuildSessions operation.
/// </summary>
public sealed record ListBuildSessionsRequest
{
    public required string BuildId { get; init; }
}
