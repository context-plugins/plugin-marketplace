namespace ReadMe.Requests.ApIs;

/// <summary>
/// The inputs of the PutBranchesByBranchApisById operation.
/// </summary>
public sealed record PutBranchesByBranchApisByIdRequest
{
    public required string Branch { get; init; }

    public required string Id { get; init; }
}
