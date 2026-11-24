namespace ReadMe.Requests.Branches;

/// <summary>
/// The inputs of the GetBranchesByBranch operation.
/// </summary>
public sealed record GetBranchesByBranchRequest
{
    public required string Branch { get; init; }
}
