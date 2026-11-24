using System;
using Hightouch.Models.Enums;

namespace Hightouch.Requests.Idr;

/// <summary>
/// The inputs of the ListIdrRuns operation.
/// </summary>
public sealed record ListIdrRunsRequest
{
    /// <summary>
    /// Required. ID of the graph to list runs for.
    /// </summary>
    public required string GraphId { get; init; }

    /// <summary>
    /// Run ID to query for.
    /// </summary>
    public string? RunId { get; init; }

    /// <summary>
    /// Select runs that started on or after this ISO timestamp.
    /// </summary>
    public DateTimeOffset? After { get; init; }

    /// <summary>
    /// Select runs that started on or before this ISO timestamp.
    /// </summary>
    public DateTimeOffset? Before { get; init; }

    /// <summary>
    /// Maximum number of runs to return.
    /// </summary>
    public double Limit { get; init; } = 20d;

    /// <summary>
    /// Offset to start at for pagination.
    /// </summary>
    public double Offset { get; init; } = 0d;

    /// <summary>
    /// Field to sort by.
    /// </summary>
    public OrderByHightouchIdrApi OrderBy { get; init; } = OrderByHightouchIdrApi.CreatedAt;
}
