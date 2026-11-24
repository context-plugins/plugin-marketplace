using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the SemanticCache operation.
/// </summary>
public sealed record SemanticCacheRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleSemanticCacheRequest? Body { get; init; }
}
