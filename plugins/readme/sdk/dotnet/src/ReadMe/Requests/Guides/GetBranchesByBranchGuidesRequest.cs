namespace ReadMe.Requests.Guides;

/// <summary>
/// The inputs of the GetBranchesByBranchGuides operation.
/// </summary>
public sealed record GetBranchesByBranchGuidesRequest
{
    public required string Branch { get; init; }
}
