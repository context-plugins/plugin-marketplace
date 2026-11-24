namespace BetterStack.Requests.StatusPages;

/// <summary>
/// The inputs of the ListStatusPagesInGroup operation.
/// </summary>
public sealed record ListStatusPagesInGroupRequest
{
    public required string Id { get; init; }
}
