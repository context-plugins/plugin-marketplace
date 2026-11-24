using UiPath.Core.Validation.Attributes;

namespace UiPath.Requests.Users;

/// <summary>
/// The inputs of the ListUsers operation.
/// </summary>
public sealed record ListUsersRequest
{
    /// <summary>
    /// Page number for pagination (1-based)
    /// </summary>
    [Minimum(1)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// Number of records per page
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 20;
}
