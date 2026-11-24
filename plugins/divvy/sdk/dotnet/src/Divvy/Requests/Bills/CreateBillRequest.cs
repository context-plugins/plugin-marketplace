using Divvy.Models;

namespace Divvy.Requests.Bills;

/// <summary>
/// The inputs of the CreateBill operation.
/// </summary>
public sealed record CreateBillRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required BillCreateRequestDto Body { get; init; }
}
