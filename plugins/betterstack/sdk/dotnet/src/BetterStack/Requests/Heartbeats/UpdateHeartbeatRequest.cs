using BetterStack.Models;

namespace BetterStack.Requests.Heartbeats;

/// <summary>
/// The inputs of the UpdateHeartbeat operation.
/// </summary>
public sealed record UpdateHeartbeatRequest
{
    public required string Id { get; init; }

    public required HeartbeatCreate Body { get; init; }
}
