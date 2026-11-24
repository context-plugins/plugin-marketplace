using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the ModelInference operation.
/// </summary>
public sealed record ModelInferenceRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleModelInferenceRequest? Body { get; init; }
}
