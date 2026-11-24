using AgentReady.Models;

namespace AgentReady.Requests.NlWeb;

/// <summary>
/// The inputs of the AskPost operation.
/// </summary>
public sealed record AskPostRequest
{
    public required AskRequest Body { get; init; }
}
