using System.Collections.Generic;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Requests.ContactPoints;

/// <summary>
/// The inputs of the ListContactPoints operation.
/// </summary>
public sealed record ListContactPointsRequest
{
    public required ContactPointSortBy SortBy { get; init; }

    /// <summary>
    /// Required direction used to sort results. Accepts asc or desc.
    /// </summary>
    public required SortOrder SortOrder { get; init; }

    public IReadOnlyList<Status1>? Status { get; init; }

    public IReadOnlyList<Type1>? Type { get; init; }

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
