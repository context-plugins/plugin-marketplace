using ReadMe.Core.Validation.Attributes;

namespace ReadMe.Requests.ApIs;

/// <summary>
/// The inputs of the GetBranchesByBranchApis operation.
/// </summary>
public sealed record GetBranchesByBranchApisRequest
{
    public required string Branch { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int PerPage { get; init; } = 10;

    [Minimum(1)]
    public int Page { get; init; } = 1;
}
