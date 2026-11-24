namespace BrowserStack.Requests.Sessions;

/// <summary>
/// The inputs of the GetSessionLogs operation.
/// </summary>
public sealed record GetSessionLogsRequest
{
    public required string SessionId { get; init; }
}
