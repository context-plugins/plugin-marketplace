using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Reimbursements;

/// <summary>
/// The inputs of the AddReimbursementReceipt operation.
/// </summary>
public sealed record AddReimbursementReceiptRequest
{
    [MinLength(1)]
    public required string ReimbursementId { get; init; }

    public string? ApiToken { get; init; }

    public required ReimbursementReceiptRequestDto Body { get; init; }
}
