namespace BetterStack.Requests.Heartbeats;

/// <summary>
/// The inputs of the DeleteHeartbeat operation.
/// </summary>
public sealed record DeleteHeartbeatRequest
{
    public required string Id { get; init; }
}
