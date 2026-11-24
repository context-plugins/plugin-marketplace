using Curlec.Models;

namespace Curlec.Requests.Bills;

/// <summary>
/// The inputs of the CreateBill operation.
/// </summary>
public sealed record CreateBillRequest
{
    public required BillsRequest Body { get; init; }
}
