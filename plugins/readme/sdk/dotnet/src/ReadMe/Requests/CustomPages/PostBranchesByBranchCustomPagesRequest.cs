namespace ReadMe.Requests.CustomPages;

/// <summary>
/// The inputs of the PostBranchesByBranchCustomPages operation.
/// </summary>
public sealed record PostBranchesByBranchCustomPagesRequest
{
    public required string Branch { get; init; }
}
