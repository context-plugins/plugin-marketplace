namespace Curlec.Requests.Invoices;

/// <summary>
/// The inputs of the CancelInvoice operation.
/// </summary>
public sealed record CancelInvoiceRequest
{
    /// <summary>
    /// Invoice ID (inv_*).
    /// </summary>
    public required string Id { get; init; }
}
