using UiPath.Core.Validation.Attributes;

namespace UiPath.Requests.TestSets;

/// <summary>
/// The inputs of the ListTestSets operation.
/// </summary>
public sealed record ListTestSetsRequest
{
    /// <summary>
    /// Unique identifier of the test project
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// Page number for pagination (0-based)
    /// </summary>
    [Minimum(0)]
    public int Page { get; init; } = 0;

    /// <summary>
    /// Number of records per page
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 20;
}
