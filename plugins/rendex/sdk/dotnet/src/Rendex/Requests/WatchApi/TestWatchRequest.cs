using Rendex.Models;

namespace Rendex.Requests.WatchApi;

/// <summary>
/// The inputs of the TestWatch operation.
/// </summary>
public sealed record TestWatchRequest
{
    public required CreateWatchRequest Body { get; init; }
}
