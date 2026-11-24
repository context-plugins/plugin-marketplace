using UiPath.Core.Validation.Attributes;

namespace UiPath.Requests.Projects;

/// <summary>
/// The inputs of the ListProjects2 operation.
/// </summary>
public sealed record ListProjects2Request
{
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
