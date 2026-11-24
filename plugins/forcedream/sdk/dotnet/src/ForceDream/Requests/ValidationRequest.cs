using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the Validation operation.
/// </summary>
public sealed record ValidationRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleValidationRequest? Body { get; init; }
}
