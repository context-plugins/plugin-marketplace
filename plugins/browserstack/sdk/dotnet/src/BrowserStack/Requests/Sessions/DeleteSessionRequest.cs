namespace BrowserStack.Requests.Sessions;

/// <summary>
/// The inputs of the DeleteSession operation.
/// </summary>
public sealed record DeleteSessionRequest
{
    public required string SessionId { get; init; }
}
