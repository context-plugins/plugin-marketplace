namespace ReadMe.Requests.Branches;

/// <summary>
/// The inputs of the DeleteBranchesByBranch operation.
/// </summary>
public sealed record DeleteBranchesByBranchRequest
{
    public required string Branch { get; init; }
}
