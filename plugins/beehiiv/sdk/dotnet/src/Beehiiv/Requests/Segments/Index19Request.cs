using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Segments;

/// <summary>
/// The inputs of the Index19 operation.
/// </summary>
public sealed record Index19Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Optionally filter the results by the segment's type.
    /// </summary>
    public SegmentType Type { get; init; } = SegmentType.All;

    /// <summary>
    /// Optionally filter the results by the segment's status.
    /// </summary>
    public SegmentRequestStatus Status { get; init; } = SegmentRequestStatus.All;

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Pagination returns the results in pages. Each page contains the number of results specified by the <c>limit</c> (default: 10).&lt;br&gt;If not specified, results 1-10 from page 1 will be returned.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// The field that the results are sorted by. Defaults to created&lt;br&gt; <c>created</c> - The time in which the segment was first created.&lt;br&gt; <c>last_calculated</c> - The time that the segment last completed calculation. Measured in seconds since the Unix epoch.
    /// </summary>
    public SegmentOrderBy OrderBy { get; init; } = SegmentOrderBy.Created;

    /// <summary>
    /// The direction that the results are sorted in. Defaults to asc&lt;br&gt; <c>asc</c> - Ascending, sorts from smallest to largest.&lt;br&gt; <c>desc</c> - Descending, sorts from largest to smallest.
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// Optionally expand the response to include additional data. &lt;br&gt; <c>stats</c> - Requests the most recently calculated statistics for a segment. &lt;br&gt; Segment stats are recalculated once daily around 7 a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and static segments only calculate once upon upload or creation.
    /// </summary>
    public IReadOnlyList<SegmentsExpandItems>? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
