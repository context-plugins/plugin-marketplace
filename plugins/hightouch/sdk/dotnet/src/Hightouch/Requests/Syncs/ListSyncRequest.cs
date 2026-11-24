using System;
using Hightouch.Models.Enums;

namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the ListSync operation.
/// </summary>
public sealed record ListSyncRequest
{
    /// <summary>
    /// filter based on slug
    /// </summary>
    public string? Slug { get; init; }

    /// <summary>
    /// filter based on modelId
    /// </summary>
    public double? ModelId { get; init; }

    /// <summary>
    /// filter based on destinationId
    /// </summary>
    public double? DestinationId { get; init; }

    /// <summary>
    /// select syncs that were run after given ISO timestamp
    /// </summary>
    public DateTimeOffset? After { get; init; }

    /// <summary>
    /// select syncs that were run before given ISO timestamp
    /// </summary>
    public DateTimeOffset? Before { get; init; }

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
    public OrderByHightouchDestinationsApi OrderBy { get; init; } = OrderByHightouchDestinationsApi.Id;
}
