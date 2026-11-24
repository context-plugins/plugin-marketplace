using Airtable.Core.Validation.Attributes;

namespace Airtable.Requests.Users;

/// <summary>
/// The inputs of the ListScimUsers operation.
/// </summary>
public sealed record ListScimUsersRequest
{
    /// <summary>
    /// SCIM filter expression (e.g., userName eq "user@example.com"). Supports eq operator on userName.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// The 1-based index of the first result to return.
    /// </summary>
    [Minimum(1)]
    public int StartIndex { get; init; } = 1;

    /// <summary>
    /// The maximum number of results to return per page.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int? Count { get; init; }
}
