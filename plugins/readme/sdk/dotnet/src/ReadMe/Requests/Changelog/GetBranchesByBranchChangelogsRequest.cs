namespace ReadMe.Requests.Changelog;

/// <summary>
/// The inputs of the GetBranchesByBranchChangelogs operation.
/// </summary>
public sealed record GetBranchesByBranchChangelogsRequest
{
    public required string Branch { get; init; }
}
