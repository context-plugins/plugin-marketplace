using System;

namespace Rendex.Requests.WatchApi;

/// <summary>
/// The inputs of the RunWatchNow operation.
/// </summary>
public sealed record RunWatchNowRequest
{
    /// <summary>
    /// Watch UUID
    /// </summary>
    public required Guid Id { get; init; }
}
