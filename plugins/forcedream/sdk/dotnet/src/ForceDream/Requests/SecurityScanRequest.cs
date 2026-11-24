using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the SecurityScan operation.
/// </summary>
public sealed record SecurityScanRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleSecurityScanRequest? Body { get; init; }
}
