using WhoisFreaks.Core.Validation.Attributes;
using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.DomainAvailability;

/// <summary>
/// The inputs of the DomainAvailabilityV2 operation.
/// </summary>
public sealed record DomainAvailabilityV2Request
{
    /// <summary>
    /// The domain name to check
    /// </summary>
    public required string Domain { get; init; }

    /// <summary>
    /// Whether to return TLD suggestions alongside the queried domain.
    /// </summary>
    public bool Sug { get; init; } = false;

    /// <summary>
    /// Number of TLD suggestions to return when sug=true. Maximum is 100.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Count { get; init; } = 5;

    public Format Format { get; init; } = Format.Json;
}
