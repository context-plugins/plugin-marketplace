using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the CodeGeneration operation.
/// </summary>
public sealed record CodeGenerationRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleCodeGenerationRequest? Body { get; init; }
}
