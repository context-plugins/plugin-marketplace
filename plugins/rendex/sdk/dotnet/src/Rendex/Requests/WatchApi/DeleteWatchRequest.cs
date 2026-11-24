using System;

namespace Rendex.Requests.WatchApi;

/// <summary>
/// The inputs of the DeleteWatch operation.
/// </summary>
public sealed record DeleteWatchRequest
{
    /// <summary>
    /// Watch UUID
    /// </summary>
    public required Guid Id { get; init; }
}
