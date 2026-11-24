using System;

namespace Rendex.Requests.WatchApi;

/// <summary>
/// The inputs of the GetWatch operation.
/// </summary>
public sealed record GetWatchRequest
{
    /// <summary>
    /// Watch UUID
    /// </summary>
    public required Guid Id { get; init; }
}
