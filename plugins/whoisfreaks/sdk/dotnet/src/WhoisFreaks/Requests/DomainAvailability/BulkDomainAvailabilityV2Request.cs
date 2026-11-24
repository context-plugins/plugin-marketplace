using WhoisFreaks.Models;
using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.DomainAvailability;

/// <summary>
/// The inputs of the BulkDomainAvailabilityV2 operation.
/// </summary>
public sealed record BulkDomainAvailabilityV2Request
{
    /// <summary>
    /// Required for TLD-mode bulk check (base domain).
    /// </summary>
    public string? Domain { get; init; }

    public Format Format { get; init; } = Format.Json;

    public required BulkDomainAvailabilityRequest Body { get; init; }
}
