using System;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Engagements;

/// <summary>
/// The inputs of the Index12 operation.
/// </summary>
public sealed record Index12Request
{
    public required string PublicationId { get; init; }

    /// <summary>
    /// The starting date for the engagement metrics in <c>YYYY-MM-DD</c> format. Defaults to 1 day ago if not provided.
    /// </summary>
    public DateTimeOffset? StartDate { get; init; }

    /// <summary>
    /// The number of days to return engagement metrics for, starting from <c>start_date</c>. Must be between 1 and 31. Defaults to <c>1</c> if not provided.
    /// </summary>
    public int? NumberOfDays { get; init; }

    /// <summary>
    /// The granularity at which to report the engagement metrics. Defaults to <c>day</c> if not provided.
    /// </summary>
    public PublicationEngagementGranularity? Granularity { get; init; }

    /// <summary>
    /// Filter engagement metrics by email type. If omitted, all email engagement is included.&lt;br&gt; <c>post</c>: Only post emails.&lt;br&gt; <c>message</c>: Only automated and system-generated emails.
    /// </summary>
    public PublicationEngagementEmailType? EmailType { get; init; }

    /// <summary>
    /// The direction that the results are sorted in. Defaults to <c>asc</c>.&lt;br&gt; <c>asc</c>: Oldest to newest&lt;br&gt; <c>desc</c>: Newest to oldest
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
