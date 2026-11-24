using System;

namespace CommonElements.Requests.AssociationResources;

/// <summary>
/// The inputs of the ResourceAssociationHazards operation.
/// </summary>
public sealed record ResourceAssociationHazardsRequest
{
    /// <summary>
    /// Association id.
    /// </summary>
    public required Guid Id { get; init; }

    /// <summary>
    /// Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can only lower this; the response's <c>meta</c> block reports what was actually applied.
    /// </summary>
    public double? Limit { get; init; }

    /// <summary>
    /// Pagination offset, 0-100000 (default 0).
    /// </summary>
    public double? Offset { get; init; }

    /// <summary>
    /// Narrow the read to one physical source behind the resource, e.g. <c>parcels.fl</c>. Source keys are listed by /api/v1/datasets.
    /// </summary>
    public string? Source { get; init; }

    /// <summary>
    /// Only records on or after this ISO date (YYYY-MM-DD).
    /// </summary>
    public DateTimeOffset? Since { get; init; }

    /// <summary>
    /// Only records on or before this ISO date (YYYY-MM-DD).
    /// </summary>
    public DateTimeOffset? Until { get; init; }
}
