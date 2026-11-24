using Divvy.Models;

namespace Divvy.Requests.BillApprovals;

/// <summary>
/// The inputs of the CreateBillApprovalPolicy operation.
/// </summary>
public sealed record CreateBillApprovalPolicyRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required BillApprovalPolicyRequestDto Body { get; init; }
}
