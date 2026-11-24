namespace ReadMe.Requests.Branches;

/// <summary>
/// The inputs of the PutBranchesByBranch operation.
/// </summary>
public sealed record PutBranchesByBranchRequest
{
    public required string Branch { get; init; }
}
