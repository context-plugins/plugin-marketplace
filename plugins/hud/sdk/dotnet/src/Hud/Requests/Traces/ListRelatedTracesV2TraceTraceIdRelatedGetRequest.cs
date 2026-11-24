using System;
using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the ListRelatedTracesV2TraceTraceIdRelatedGet operation.
/// </summary>
public sealed record ListRelatedTracesV2TraceTraceIdRelatedGetRequest
{
    public required Guid TraceId { get; init; }

    /// <summary>
    /// <c>job</c> (same job_id), <c>task</c> (every version of the same task), <c>recent</c> (caller's own traces, requires auth), or <c>discover</c> (most-recent visible traces overall).
    /// </summary>
    public required RelatedKind1 Kind { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    /// <summary>
    /// Only meaningful with <c>kind=task</c>: further restrict to the source trace's job. Used by the info-card sibling-run squares.
    /// </summary>
    public bool ScopeToJob { get; init; } = false;

    /// <summary>
    /// Comma-separated status whitelist applied to ``Trace.status`` — e.g. `completed` to exclude live/cancelled rows.
    /// </summary>
    public Status21? Status { get; init; }

    /// <summary>
    /// Sort by created_at.
    /// </summary>
    public RelatedOrder1? Order { get; init; }
}
