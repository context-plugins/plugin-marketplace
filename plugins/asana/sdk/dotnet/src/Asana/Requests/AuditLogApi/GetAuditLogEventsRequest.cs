using System;
using Asana.Models.Enums;

namespace Asana.Requests.AuditLogApi;

/// <summary>
/// The inputs of the GetAuditLogEvents operation.
/// </summary>
public sealed record GetAuditLogEventsRequest
{
    /// <summary>
    /// Globally unique identifier for the workspace or organization.
    /// </summary>
    public required string WorkspaceGid { get; init; }

    /// <summary>
    /// Filter to events created after this time (inclusive).
    /// </summary>
    public DateTimeOffset? StartAt { get; init; }

    /// <summary>
    /// Filter to events created before this time (exclusive).
    /// </summary>
    public DateTimeOffset? EndAt { get; init; }

    /// <summary>
    /// Filter to events of this type.
    /// Refer to the <see href="/docs/supported-auditlogevents">Supported AuditLogEvents</see> for a full list of values.
    /// </summary>
    public string? EventType { get; init; }

    /// <summary>
    /// Filter to events with an actor of this type.
    /// This only needs to be included if querying for actor types without an ID. If <c>actor_gid</c> is included, this should be excluded.
    /// </summary>
    public ActorType1? ActorType { get; init; }

    /// <summary>
    /// Filter to events triggered by the actor with this ID.
    /// </summary>
    public string? ActorGid { get; init; }

    /// <summary>
    /// Filter to events with this resource ID.
    /// </summary>
    public string? ResourceGid { get; init; }

    /// <summary>
    /// Results per page.
    /// The number of objects to return per page. The value must be between 1 and 100.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Offset token.
    /// An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
    /// 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    /// </summary>
    public string? Offset { get; init; }
}
