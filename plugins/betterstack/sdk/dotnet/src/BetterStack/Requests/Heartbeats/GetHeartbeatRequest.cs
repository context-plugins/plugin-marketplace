namespace BetterStack.Requests.Heartbeats;

/// <summary>
/// The inputs of the GetHeartbeat operation.
/// </summary>
public sealed record GetHeartbeatRequest
{
    public required string Id { get; init; }
}
