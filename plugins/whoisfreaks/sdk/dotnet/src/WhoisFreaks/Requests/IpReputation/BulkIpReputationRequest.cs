using WhoisFreaks.Models;

namespace WhoisFreaks.Requests.IpReputation;

/// <summary>
/// The inputs of the BulkIpReputation operation.
/// </summary>
public sealed record BulkIpReputationRequest
{
    public required V10SecurityRequest Body { get; init; }
}
