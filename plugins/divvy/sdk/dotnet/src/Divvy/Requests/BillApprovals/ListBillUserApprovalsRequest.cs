namespace Divvy.Requests.BillApprovals;

/// <summary>
/// The inputs of the ListBillUserApprovals operation.
/// </summary>
public sealed record ListBillUserApprovalsRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
