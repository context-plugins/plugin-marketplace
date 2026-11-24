using System;
using Hightouch.Models.Enums;

namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the ListSyncRuns operation.
/// </summary>
public sealed record ListSyncRunsRequest
{
    public required double SyncId { get; init; }

    /// <summary>
    /// query for specific run id
    /// </summary>
    public double? RunId { get; init; }

    /// <summary>
    /// select sync runs that are started after given ISO timestamp
    /// </summary>
    public DateTimeOffset? After { get; init; }

    /// <summary>
    /// select sync runs that are started before certain ISO timestamp
    /// </summary>
    public DateTimeOffset? Before { get; init; }

    /// <summary>
    /// select sync runs that are started within last given minutes
    /// </summary>
    public double? Within { get; init; }

    /// <summary>
    /// set the offset on results (for pagination)
    /// </summary>
    public double Offset { get; init; } = 0d;

    /// <summary>
    /// limit the number of objects returned (default is 100)
    /// </summary>
    public double Limit { get; init; } = 100d;

    /// <summary>
    /// specify the order
    /// </summary>
    public OrderBy1 OrderBy { get; init; } = OrderBy1.Id;
}
