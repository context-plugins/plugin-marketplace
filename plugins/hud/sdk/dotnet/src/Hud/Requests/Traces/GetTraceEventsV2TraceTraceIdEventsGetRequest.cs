using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the GetTraceEventsV2TraceTraceIdEventsGet operation.
/// </summary>
public sealed record GetTraceEventsV2TraceTraceIdEventsGetRequest
{
    public required Guid TraceId { get; init; }

    /// <summary>
    /// Return only events derived from spans with sequence &gt; since_seq. Use -1 (default) for the first page, then pass the previous <c>next_seq</c> while <c>has_more</c> is true. Once caught up, use <c>latest_seq</c> for incremental polling.
    /// </summary>
    public int SinceSeq { get; init; } = -1;

    /// <summary>
    /// Maximum completed span references to project in this page.
    /// </summary>
    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 100;
}
