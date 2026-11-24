namespace BrowserStack.Requests.Sessions;

/// <summary>
/// The inputs of the GetSessionNetworkLogs operation.
/// </summary>
public sealed record GetSessionNetworkLogsRequest
{
    public required string SessionId { get; init; }
}
