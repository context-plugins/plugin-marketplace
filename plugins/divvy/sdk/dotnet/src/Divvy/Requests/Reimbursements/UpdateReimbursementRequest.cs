using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Reimbursements;

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
