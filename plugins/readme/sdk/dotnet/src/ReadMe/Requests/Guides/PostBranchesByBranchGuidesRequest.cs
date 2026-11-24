namespace ReadMe.Requests.Guides;

/// <summary>
/// The inputs of the PostBranchesByBranchGuides operation.
/// </summary>
public sealed record PostBranchesByBranchGuidesRequest
{
    public required string Branch { get; init; }
}
