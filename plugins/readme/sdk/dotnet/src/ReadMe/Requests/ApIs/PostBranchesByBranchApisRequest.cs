namespace ReadMe.Requests.ApIs;

/// <summary>
/// The inputs of the PostBranchesByBranchApis operation.
/// </summary>
public sealed record PostBranchesByBranchApisRequest
{
    public required string Branch { get; init; }
}
