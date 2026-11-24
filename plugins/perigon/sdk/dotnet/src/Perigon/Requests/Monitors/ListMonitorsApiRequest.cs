using System;
using System.Collections.Generic;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Requests.Monitors;

/// <summary>
/// The inputs of the ListMonitorsApi operation.
/// </summary>
public sealed record ListMonitorsApiRequest
{
    /// <summary>
    /// Required field used to sort monitors. Accepts createdAt or updatedAt.
    /// </summary>
    public required string SortBy { get; init; }

    /// <summary>
    /// Required direction used to sort results. Accepts asc or desc.
    /// </summary>
    public required SortOrder SortOrder { get; init; }

    /// <summary>
    /// Filter by one or more monitor UUIDs. Multiple values are combined with OR.
    /// </summary>
    public IReadOnlyList<Guid>? Uuid { get; init; }

    /// <summary>
    /// Filter by monitor name using a case-insensitive partial match.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Filter by status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. When omitted, archived monitors are excluded.
    /// </summary>
    [UniqueItems]
    public IReadOnlyList<Status2>? Status { get; init; }

    /// <summary>
    /// Filter by classification type: EVENT, MENTIONS, or TOPIC. Multiple values are combined with OR.
    /// </summary>
    [UniqueItems]
    public IReadOnlyList<ClassificationType3>? ClassificationType { get; init; }

    /// <summary>
    /// Zero-based page number to retrieve. Defaults to 0.
    /// </summary>
    [Minimum(0)]
    public int Page { get; init; } = 0;

    /// <summary>
    /// Number of results per page. Must be between 1 and 100; defaults to 10.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Size { get; init; } = 10;

    /// <summary>
    /// Placement of null values in sorted results. Accepts first or last.
    /// </summary>
    public Nulls? Nulls { get; init; }
}
