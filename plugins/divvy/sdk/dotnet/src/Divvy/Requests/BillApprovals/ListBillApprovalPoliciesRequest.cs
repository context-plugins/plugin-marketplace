namespace Divvy.Requests.BillApprovals;

/// <summary>
/// The inputs of the ListBillApprovalPolicies operation.
/// </summary>
public sealed record ListBillApprovalPoliciesRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
