using Airtable.Core.Validation.Attributes;

namespace Airtable.Requests.Groups;

/// <summary>
/// The inputs of the ListScimGroups operation.
/// </summary>
public sealed record ListScimGroupsRequest
{
    /// <summary>
    /// SCIM filter expression (e.g., displayName eq "Engineering").
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
