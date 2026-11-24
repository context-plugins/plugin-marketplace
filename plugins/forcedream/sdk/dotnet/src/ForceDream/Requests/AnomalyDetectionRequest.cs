using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the AnomalyDetection operation.
/// </summary>
public sealed record AnomalyDetectionRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleAnomalyDetectionRequest? Body { get; init; }
}
