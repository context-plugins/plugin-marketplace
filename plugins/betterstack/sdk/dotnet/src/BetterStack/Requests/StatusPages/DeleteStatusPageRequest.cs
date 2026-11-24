namespace BetterStack.Requests.StatusPages;

/// <summary>
/// The inputs of the DeleteStatusPage operation.
/// </summary>
public sealed record DeleteStatusPageRequest
{
    public required string Id { get; init; }
}
