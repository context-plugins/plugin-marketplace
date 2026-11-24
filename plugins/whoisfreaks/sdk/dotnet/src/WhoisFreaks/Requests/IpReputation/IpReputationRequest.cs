namespace WhoisFreaks.Requests.IpReputation;

/// <summary>
/// The inputs of the IpReputationInvoke operation.
/// </summary>
public sealed record IpReputationRequest
{
    public required string Ip { get; init; }
}
