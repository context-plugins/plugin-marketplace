using BetterStack.Models;

namespace BetterStack.Requests.Heartbeats;

/// <summary>
/// The inputs of the CreateHeartbeat operation.
/// </summary>
public sealed record CreateHeartbeatRequest
{
    public required HeartbeatCreate Body { get; init; }
}
