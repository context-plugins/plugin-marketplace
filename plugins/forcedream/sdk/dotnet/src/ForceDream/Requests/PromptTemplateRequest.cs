using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the PromptTemplate operation.
/// </summary>
public sealed record PromptTemplateRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OraclePromptTemplateRequest? Body { get; init; }
}
