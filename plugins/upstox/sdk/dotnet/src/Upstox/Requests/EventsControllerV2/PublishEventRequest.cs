using Upstox.Models;

namespace Upstox.Requests.EventsControllerV2;

/// <summary>
/// The inputs of the PublishEvent operation.
/// </summary>
public sealed record PublishEventRequest
{
    public required EventRequest Body { get; init; }
}
