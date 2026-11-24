namespace ReadMe.Requests.Changelog;

/// <summary>
/// The inputs of the PostBranchesByBranchChangelogs operation.
/// </summary>
public sealed record PostBranchesByBranchChangelogsRequest
{
    public required string Branch { get; init; }
}
