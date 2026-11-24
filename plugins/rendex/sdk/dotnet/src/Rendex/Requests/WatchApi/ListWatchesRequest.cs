using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Requests.WatchApi;

/// <summary>
/// The inputs of the ListWatches operation.
/// </summary>
public sealed record ListWatchesRequest
{
    /// <summary>
    /// Filter by state
    /// </summary>
    public Status2RendexRenderingWatchApi Status { get; init; } = Status2RendexRenderingWatchApi.All;

    /// <summary>
    /// Opaque pagination cursor from a prior response's nextCursor
    /// </summary>
    public string? Cursor { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 20;
}
