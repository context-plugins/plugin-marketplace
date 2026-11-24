using BetterStack.Models;

namespace BetterStack.Requests.StatusPages;

/// <summary>
/// The inputs of the UpdateStatusPage operation.
/// </summary>
public sealed record UpdateStatusPageRequest
{
    public required string Id { get; init; }

    public required StatusPageCreate Body { get; init; }
}
