using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.DomainReputation;

/// <summary>
/// The inputs of the DomainReputationInvoke operation.
/// </summary>
public sealed record DomainReputationRequest
{
    /// <summary>
    /// The domain name to assess
    /// </summary>
    public required string DomainName { get; init; }

    public Format Format { get; init; } = Format.Json;
}
