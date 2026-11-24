using FacebookBusinessManager.Core.Validation.Attributes;

namespace FacebookBusinessManager.Requests.AdSets;

/// <summary>
/// The inputs of the ListAdSets operation.
/// </summary>
public sealed record ListAdSetsRequest
{
    /// <summary>
    /// The ID of the ad account (numeric, without the act_ prefix)
    /// </summary>
    public required string AdAccountId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. If omitted, default fields are returned.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Maximum number of objects to return per page. Default is 25.
    /// </summary>
    [Maximum(100)]
    public int Limit { get; init; } = 25;

    /// <summary>
    /// Cursor for pagination to retrieve the next page of results
    /// </summary>
    public string? After { get; init; }
}
