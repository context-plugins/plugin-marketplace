using Lili.Models;

namespace Lili.Requests;

/// <summary>
/// The inputs of the UpdateLead operation.
/// </summary>
public sealed record UpdateLeadRequest
{
    public required string CustomerId { get; init; }

    public LeadRequest? Body { get; init; }
}
