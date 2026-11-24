using System;
using System.Collections.Generic;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Requests.AuditLogs;

/// <summary>
/// The inputs of the QueryOrganizationAuditEvents operation.
/// </summary>
public sealed record QueryOrganizationAuditEventsRequest
{
    /// <summary>
    /// The name of the UiPath organization
    /// </summary>
    public required string OrganizationName { get; init; }

    /// <summary>
    /// Start of the audit event time range (ISO 8601 datetime)
    /// </summary>
    public DateTimeOffset? From { get; init; }

    /// <summary>
    /// End of the audit event time range (ISO 8601 datetime)
    /// </summary>
    public DateTimeOffset? To { get; init; }

    /// <summary>
    /// Filter by event source service name
    /// </summary>
    public IReadOnlyList<string>? Source { get; init; }

    /// <summary>
    /// Maximum number of audit events to return
    /// </summary>
    [Minimum(1)]
    [Maximum(1000)]
    public int? MaxCount { get; init; }
}
