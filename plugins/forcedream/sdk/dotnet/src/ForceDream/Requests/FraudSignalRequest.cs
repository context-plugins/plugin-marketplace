using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the FraudSignal operation.
/// </summary>
public sealed record FraudSignalRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleFraudSignalRequest? Body { get; init; }
}
