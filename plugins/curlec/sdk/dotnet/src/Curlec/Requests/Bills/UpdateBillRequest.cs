using Curlec.Models;

namespace Curlec.Requests.Bills;

/// <summary>
/// The inputs of the UpdateBill operation.
/// </summary>
public sealed record UpdateBillRequest
{
    /// <summary>
    /// Bill ID with prefix bill_
    /// </summary>
    public required string BillId { get; init; }

    public required Bill Body { get; init; }
}
