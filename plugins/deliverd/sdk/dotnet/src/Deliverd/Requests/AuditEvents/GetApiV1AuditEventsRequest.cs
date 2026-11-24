using System;
using System.ComponentModel.DataAnnotations;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Requests.AuditEvents;

/// <summary>
/// The inputs of the GetApiV1AuditEvents operation.
/// </summary>
public sealed record GetApiV1AuditEventsRequest
{
    /// <summary>
    /// Rows per page. Above the maximum you get the maximum, not an error.
    /// </summary>
    [Minimum(1)]
    [Maximum(200)]
    public int? Limit { get; init; }

    /// <summary>
    /// nextCursor from a previous response. One we did not issue is refused.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Entries at or after this time (ISO 8601).
    /// </summary>
    public DateTimeOffset? Since { get; init; }

    /// <summary>
    /// Entries at or before this time (ISO 8601).
    /// </summary>
    public DateTimeOffset? Until { get; init; }

    /// <summary>
    /// An event type (<c>report.published</c>), or a family ending in a dot (<c>legal_hold.</c>).
    /// </summary>
    [MaxLength(100)]
    public string? EventType { get; init; }

    /// <summary>
    /// The person, agent or key that acted.
    /// </summary>
    public Guid? ActorId { get; init; }

    /// <summary>
    /// What kind of actor.
    /// </summary>
    public ActorType? ActorType { get; init; }

    /// <summary>
    /// What the entry is about, e.g. <c>report</c>.
    /// </summary>
    [MaxLength(100)]
    public string? ResourceType { get; init; }

    /// <summary>
    /// The id of what it is about.
    /// </summary>
    [MaxLength(200)]
    public string? ResourceId { get; init; }

    /// <summary>
    /// Entries about this flow (project) and everything attached to it: its approvals, reviews, requests and reports.
    /// </summary>
    public Guid? FlowId { get; init; }

    /// <summary>
    /// Entries after this chain position, oldest first: the way to tail the log. Pass the last chainSeq you have; 0 starts at the first chained entry. Unlike since, it cannot miss an entry written late with an earlier time.
    /// </summary>
    [Minimum(0)]
    public int? AfterSeq { get; init; }
}
