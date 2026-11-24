namespace Unbounce.Requests.Leads;

/// <summary>
/// The inputs of the ListLeadDeletionRequests operation.
/// </summary>
public sealed record ListLeadDeletionRequestsRequest
{
    public required string PageId { get; init; }
}
