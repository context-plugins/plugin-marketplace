namespace ReadMe.Requests.ApIs;

/// <summary>
/// The inputs of the DeleteBranchesByBranchApisById operation.
/// </summary>
public sealed record DeleteBranchesByBranchApisByIdRequest
{
    public required string Branch { get; init; }

    public required string Id { get; init; }
}
