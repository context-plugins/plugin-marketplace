namespace Unbounce.Requests.Leads;

/// <summary>
/// The inputs of the ListLeadsForPage operation.
/// </summary>
public sealed record ListLeadsForPageRequest
{
    public required string PageId { get; init; }
}
