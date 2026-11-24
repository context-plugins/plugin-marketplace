using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the Classification operation.
/// </summary>
public sealed record ClassificationRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleClassificationRequest? Body { get; init; }
}
