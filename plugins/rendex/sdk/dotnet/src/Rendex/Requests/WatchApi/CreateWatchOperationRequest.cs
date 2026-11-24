using Rendex.Models;

namespace Rendex.Requests.WatchApi;

/// <summary>
/// The inputs of the CreateWatch operation.
/// </summary>
public sealed record CreateWatchOperationRequest
{
    public required CreateWatchRequest Body { get; init; }
}
