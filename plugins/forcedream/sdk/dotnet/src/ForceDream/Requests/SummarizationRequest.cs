using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the Summarization operation.
/// </summary>
public sealed record SummarizationRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleSummarizationRequest? Body { get; init; }
}
