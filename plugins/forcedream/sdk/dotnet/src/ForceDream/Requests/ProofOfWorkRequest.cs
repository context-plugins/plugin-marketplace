using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the ProofOfWork operation.
/// </summary>
public sealed record ProofOfWorkRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleProofOfWorkRequest? Body { get; init; }
}
