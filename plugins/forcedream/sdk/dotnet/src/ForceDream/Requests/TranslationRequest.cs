using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the Translation operation.
/// </summary>
public sealed record TranslationRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleTranslationRequest? Body { get; init; }
}
