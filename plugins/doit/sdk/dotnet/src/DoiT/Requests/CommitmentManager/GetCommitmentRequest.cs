namespace DoiT.Requests.CommitmentManager;

/// <summary>
/// The inputs of the GetCommitment operation.
/// </summary>
public sealed record GetCommitmentRequest
{
    /// <summary>
    /// Commitment ID
    /// </summary>
    public required string Id { get; init; }
}
