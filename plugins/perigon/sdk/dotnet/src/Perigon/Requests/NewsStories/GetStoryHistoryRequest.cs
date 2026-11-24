using System;
using System.Collections.Generic;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Requests.NewsStories;

/// <summary>
/// The inputs of the GetStoryHistory operation.
/// </summary>
public sealed record GetStoryHistoryRequest
{
    /// <summary>
    /// Filter history records by story cluster ID. Multiple values are combined with OR.
    /// </summary>
    public IReadOnlyList<string>? ClusterId { get; init; }

    /// <summary>
    /// Filter for history records created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? From { get; init; }

    /// <summary>
    /// Filter for history records created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? To { get; init; }

    /// <summary>
    /// Field used to sort history records in descending order. Accepts createdAt or triggeredAt and defaults to createdAt.
    /// </summary>
    public SortBy? SortBy { get; init; }

    /// <summary>
    /// Integer. Zero-based page number. From 0 to 10000. See the Pagination section for limitations.
    /// </summary>
    [Minimum(0)]
    [Maximum(10000)]
    public int? Page { get; init; }

    /// <summary>
    /// Integer. Number of stories results per page, from 0 to 100.
    /// </summary>
    [Minimum(0)]
    [Maximum(100)]
    public int? Size { get; init; }

    /// <summary>
    /// Filter by whether a history record contains a changelog. Use true to require one or false to require its absence.
    /// </summary>
    public bool? ChangelogExists { get; init; }
}
