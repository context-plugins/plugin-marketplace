namespace Unbounce.Requests.Leads;

/// <summary>
/// The inputs of the GetLeadDeletionRequest operation.
/// </summary>
public sealed record GetLeadDeletionRequest
{
    public required string PageId { get; init; }

    public required string LeadDeletionRequestId { get; init; }
}
