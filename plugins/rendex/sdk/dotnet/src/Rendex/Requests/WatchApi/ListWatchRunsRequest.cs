using System;
using Rendex.Core.Validation.Attributes;

namespace Rendex.Requests.WatchApi;

/// <summary>
/// The inputs of the ListWatchRuns operation.
/// </summary>
public sealed record ListWatchRunsRequest
{
    /// <summary>
    /// Watch UUID
    /// </summary>
    public required Guid Id { get; init; }

    public string? Cursor { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 20;
}
