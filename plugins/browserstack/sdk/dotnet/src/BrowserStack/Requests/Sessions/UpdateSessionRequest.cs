using BrowserStack.Models;

namespace BrowserStack.Requests.Sessions;

/// <summary>
/// The inputs of the UpdateSession operation.
/// </summary>
public sealed record UpdateSessionRequest
{
    public required string SessionId { get; init; }

    public required AutomateSessionsJsonRequest Body { get; init; }
}
