namespace Unbounce.Requests.Leads;

/// <summary>
/// The inputs of the GetLead operation.
/// </summary>
public sealed record GetLeadRequest
{
    public required string LeadId { get; init; }
}
