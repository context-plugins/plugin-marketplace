namespace BetterStack.Requests.Heartbeats;

/// <summary>
/// The inputs of the GetHeartbeatAvailability operation.
/// </summary>
public sealed record GetHeartbeatAvailabilityRequest
{
    public required string Id { get; init; }
}
