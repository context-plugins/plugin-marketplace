namespace BetterStack.Requests.StatusPages;

/// <summary>
/// The inputs of the GetStatusPage operation.
/// </summary>
public sealed record GetStatusPageRequest
{
    public required string Id { get; init; }
}
