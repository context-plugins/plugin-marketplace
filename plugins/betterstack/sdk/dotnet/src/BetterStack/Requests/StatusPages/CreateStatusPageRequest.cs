using BetterStack.Models;

namespace BetterStack.Requests.StatusPages;

/// <summary>
/// The inputs of the CreateStatusPage operation.
/// </summary>
public sealed record CreateStatusPageRequest
{
    public required StatusPageCreate Body { get; init; }
}
