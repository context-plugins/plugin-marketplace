using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Reimbursements;

/// <summary>
/// The inputs of the UpdateReimbursement operation.
/// </summary>
public sealed record UpdateReimbursementRequest
{
    [MinLength(1)]
    public required string ReimbursementId { get; init; }

    public string? ApiToken { get; init; }

    public required UpdateReimbursementRequestDto Body { get; init; }
}
