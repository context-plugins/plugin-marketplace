using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Reimbursements;

/// <summary>
/// The inputs of the DeleteReimbursement operation.
/// </summary>
public sealed record DeleteReimbursementRequest
{
    [MinLength(1)]
    public required string ReimbursementId { get; init; }

    public string? ApiToken { get; init; }
}
