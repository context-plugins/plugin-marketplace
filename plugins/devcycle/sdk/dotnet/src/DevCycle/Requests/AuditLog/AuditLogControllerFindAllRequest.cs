using System;
using DevCycle.Core.Validation.Attributes;
using DevCycle.Models.Enums;

namespace DevCycle.Requests.AuditLog;

/// <summary>
/// The inputs of the AuditLogControllerFindAll operation.
/// </summary>
public sealed record AuditLogControllerFindAllRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    [Minimum(1.0)]
    public double Page { get; init; } = 1d;

    [Minimum(1.0)]
    [Maximum(1000.0)]
    public double PerPage { get; init; } = 100d;

    public SortBy SortBy { get; init; } = SortBy.CreatedAt;

    public SortOrder SortOrder { get; init; } = SortOrder.Desc;

    public string? Environment { get; init; }

    public string? A0User { get; init; }

    public DateTimeOffset? StartDate { get; init; }

    public DateTimeOffset? EndDate { get; init; }
}
