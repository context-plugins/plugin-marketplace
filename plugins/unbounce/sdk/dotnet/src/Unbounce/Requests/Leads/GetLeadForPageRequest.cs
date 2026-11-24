namespace Unbounce.Requests.Leads;

/// <summary>
/// The inputs of the GetLeadForPage operation.
/// </summary>
public sealed record GetLeadForPageRequest
{
    public required string PageId { get; init; }

    public required string LeadId { get; init; }
}
