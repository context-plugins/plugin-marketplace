namespace ReadMe.Requests.ApIs;

/// <summary>
/// The inputs of the GetBranchesByBranchApisById operation.
/// </summary>
public sealed record GetBranchesByBranchApisByIdRequest
{
    public required string Branch { get; init; }

    public required string Id { get; init; }
}
