namespace ForceDream.Requests;

/// <summary>
/// The inputs of the GetProof operation.
/// </summary>
public sealed record GetProofRequest
{
    public required string TaskId { get; init; }
}
