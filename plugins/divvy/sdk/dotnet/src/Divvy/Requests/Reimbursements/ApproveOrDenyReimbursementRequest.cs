using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Reimbursements;

/// <summary>
/// The inputs of the ApproveOrDenyReimbursement operation.
/// </summary>
public sealed record ApproveOrDenyReimbursementRequest
{
    [MinLength(1)]
    public required string ReimbursementId { get; init; }

    public string? ApiToken { get; init; }

    public required ReimbursementActionRequestDto Body { get; init; }
}
