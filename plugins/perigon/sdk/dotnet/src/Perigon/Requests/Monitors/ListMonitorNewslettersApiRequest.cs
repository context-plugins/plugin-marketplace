using System;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Requests.Monitors;

/// <summary>
/// The inputs of the ListMonitorNewslettersApi operation.
/// </summary>
public sealed record ListMonitorNewslettersApiRequest
{
    /// <summary>
    /// UUID of the monitor whose newsletters to retrieve.
    /// </summary>
    public required Guid Uuid { get; init; }

    /// <summary>
    /// Required field used to sort newsletters. Accepts createdAt or updatedAt.
    /// </summary>
    public required string SortBy { get; init; }

    /// <summary>
    /// Required direction used to sort results. Accepts asc or desc.
    /// </summary>
    public required SortOrder SortOrder { get; init; }

    /// <summary>
    /// Filter by newsletter title using a case-insensitive partial match.
    /// </summary>
    public string? Title { get; init; }

    /// <summary>
    /// Filter for newsletters created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? From { get; init; }

    /// <summary>
    /// Filter for newsletters created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? To { get; init; }

    /// <summary>
    /// Zero-based page number to retrieve. Defaults to 0.
    /// </summary>
    [Minimum(0)]
    public int Page { get; init; } = 0;

    /// <summary>
    /// Number of results per page. Must be between 1 and 100; defaults to 10.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Size { get; init; } = 10;

    /// <summary>
    /// Placement of null values in sorted results. Accepts first or last.
    /// </summary>
    public Nulls? Nulls { get; init; }
}
