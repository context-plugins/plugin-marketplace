using System;
using Rendex.Models;

namespace Rendex.Requests.WatchApi;

/// <summary>
/// The inputs of the UpdateWatch operation.
/// </summary>
public sealed record UpdateWatchOperationRequest
{
    /// <summary>
    /// Watch UUID
    /// </summary>
    public required Guid Id { get; init; }

    public required UpdateWatchRequest Body { get; init; }
}
