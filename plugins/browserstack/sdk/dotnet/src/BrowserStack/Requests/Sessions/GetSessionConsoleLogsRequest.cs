namespace BrowserStack.Requests.Sessions;

/// <summary>
/// The inputs of the GetSessionConsoleLogs operation.
/// </summary>
public sealed record GetSessionConsoleLogsRequest
{
    public required string SessionId { get; init; }
}
