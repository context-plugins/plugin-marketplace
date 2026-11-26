using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Reimbursements;

/// <summary>
/// The inputs of the DeleteReimbursementReceipt operation.
/// </summary>
public sealed record DeleteReimbursementReceiptRequest
{
    [MinLength(1)]
    public required string ReimbursementId { get; init; }

    [MinLength(1)]
    public required string ReceiptId { get; init; }

    public string? ApiToken { get; init; }
}
