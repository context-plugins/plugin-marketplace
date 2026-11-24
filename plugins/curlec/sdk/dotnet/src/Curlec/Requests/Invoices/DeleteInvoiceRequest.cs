namespace Curlec.Requests.Invoices;

/// <summary>
/// The inputs of the DeleteInvoice operation.
/// </summary>
public sealed record DeleteInvoiceRequest
{
    /// <summary>
    /// Invoice ID (inv_*).
    /// </summary>
    public required string Id { get; init; }
}
