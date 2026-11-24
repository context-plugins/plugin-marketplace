using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Segments;

/// <summary>
/// The inputs of the Show15 operation.
/// </summary>
public sealed record Show15Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the segment object
    /// </summary>
    public required string SegmentId { get; init; }

    /// <summary>
    /// Optionally expand the response to include additional data. &lt;br&gt; <c>stats</c> - Requests the most recently calculated statistics for a segment. &lt;br&gt; Segment stats are recalculated once daily around 7 a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and static segments only calculate once upon upload or creation.
    /// </summary>
    public IReadOnlyList<SegmentsExpandItems>? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
