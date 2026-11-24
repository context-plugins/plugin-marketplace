using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.BillApprovals;

/// <summary>
/// The inputs of the UpdateBillApprovalPolicy operation.
/// </summary>
public sealed record UpdateBillApprovalPolicyRequest
{
    [MinLength(1)]
    public required string PolicyId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required BillApprovalPolicyRequestDto Body { get; init; }
}
