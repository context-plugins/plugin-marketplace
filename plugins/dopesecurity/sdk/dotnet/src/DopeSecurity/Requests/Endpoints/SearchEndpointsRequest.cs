using System.Collections.Generic;
using DopeSecurity.Models.Enums;

namespace DopeSecurity.Requests.Endpoints;

/// <summary>
/// The inputs of the SearchEndpoints operation.
/// </summary>
public sealed record SearchEndpointsRequest
{
    /// <summary>
    /// Broad search query across endpoints by device, user and email identities that contain this string (case-insensitive)
    /// </summary>
    public string? Id { get; init; }

    /// <summary>
    /// Search by email ids that contain this string (case-insensitive)
    /// </summary>
    public string? EmailId { get; init; }

    /// <summary>
    /// Search by device names that contain this string (case-insensitive)
    /// </summary>
    public string? DeviceName { get; init; }

    /// <summary>
    /// Search by user ids that contain this string (case-insensitive). <c>userId</c> for OIDC users is usually their email address.
    /// </summary>
    public string? UserId { get; init; }

    /// <summary>
    /// Filter by this exact device OS version string
    /// </summary>
    public string? OsVersion { get; init; }

    /// <summary>
    /// Filter by this exact set of status'
    /// </summary>
    public IReadOnlyList<Status>? Status { get; init; }

    /// <summary>
    /// Filter by this exact set of debug states.
    /// 0 means not in debug
    /// 1 means debug request sent to endpoint
    /// 2 means debug request acknowledged by endpoint
    /// </summary>
    public IReadOnlyList<DebugState>? DebugState { get; init; }

    /// <summary>
    /// Filter by the fallback mode
    /// </summary>
    public FallbackMode? FallbackMode { get; init; }

    /// <summary>
    /// Filter by this exact location id - with an underscore separating the case sensitive city and country values e.g. "City_Country"
    /// </summary>
    public string? LocationId { get; init; }

    /// <summary>
    /// Filter by this exact agent version
    /// </summary>
    public string? AgentVersion { get; init; }

    /// <summary>
    /// An optional pagination param that states the number of records requested from the <b>start</b> of the <c>cursor</c>. The default value is <b>50</b>.
    /// </summary>
    public int First { get; init; } = 50;

    /// <summary>
    /// An optional pagination cursor. Pass the <c>endCursor</c> from the previous response's <c>pageInfo</c> to fetch the next page. Check <c>hasNextPage</c> in the previous response's <c>pageInfo</c> to determine whether more records are available.
    /// </summary>
    public string? After { get; init; }

    /// <summary>
    /// The direction of the sort by the <c>lastSeen</c> property. The default is to sort by descending
    /// </summary>
    public Order? Order { get; init; }
}
