namespace Curlec.Requests.Bills;

/// <summary>
/// The inputs of the DeleteBill operation.
/// </summary>
public sealed record DeleteBillRequest
{
    /// <summary>
    /// Bill ID with prefix bill_
    /// </summary>
    public required string BillId { get; init; }
}
