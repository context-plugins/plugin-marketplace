namespace ReadMe.Requests.CustomPages;

/// <summary>
/// The inputs of the GetBranchesByBranchCustomPages operation.
/// </summary>
public sealed record GetBranchesByBranchCustomPagesRequest
{
    public required string Branch { get; init; }
}
