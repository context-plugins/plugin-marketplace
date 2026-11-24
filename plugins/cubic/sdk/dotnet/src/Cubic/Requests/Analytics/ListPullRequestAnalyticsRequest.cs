using System.ComponentModel.DataAnnotations;
using Cubic.Core.Validation.Attributes;

namespace Cubic.Requests.Analytics;

/// <summary>
/// The inputs of the ListPullRequestAnalytics operation.
/// </summary>
public sealed record ListPullRequestAnalyticsRequest
{
    /// <summary>
    /// GitHub organization or owner whose pull request analytics you want to fetch. Surrounding whitespace is trimmed before validation.
    /// </summary>
    [StringLength(255, MinimumLength = 1)]
    public required string Org { get; init; }

    /// <summary>
    /// Filter to one repository under the selected owner. Surrounding whitespace is trimmed before validation; blank values are ignored.
    /// </summary>
    [MaxLength(255)]
    public string? Repo { get; init; }

    /// <summary>
    /// Start of the review date window. Accepts ISO 8601 timestamps or UTC date-only values such as 2026-04-01. Surrounding whitespace is trimmed before validation; blank values are ignored. If neither date bound is set, cubic uses the last 30 days, 7 days, or 24 hours based on the installation's available history.
    /// </summary>
    [MaxLength(255)]
    public string? StartDate { get; init; }

    /// <summary>
    /// End of the review date window. A UTC date-only value includes the full day through 23:59:59.999Z. Surrounding whitespace is trimmed before validation; blank values are ignored.
    /// </summary>
    [MaxLength(255)]
    public string? EndDate { get; init; }

    /// <summary>
    /// Number of results per page, from 1 to 100. Values outside this range return 400.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int PerPage { get; init; } = 100;

    /// <summary>
    /// Copy nextCursor unchanged from the preceding response. Keep the same organization, filters, and date window across pages. Surrounding whitespace is trimmed before validation; blank values are ignored.
    /// </summary>
    [MaxLength(255)]
    public string? Cursor { get; init; }
}
