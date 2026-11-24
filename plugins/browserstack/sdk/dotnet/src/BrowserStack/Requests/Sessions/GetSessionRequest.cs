namespace BrowserStack.Requests.Sessions;

/// <summary>
/// The inputs of the GetSession operation.
/// </summary>
public sealed record GetSessionRequest
{
    public required string SessionId { get; init; }
}
