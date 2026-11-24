namespace Curlec.Requests.Invoices;

/// <summary>
/// The inputs of the FetchInvoice operation.
/// </summary>
public sealed record FetchInvoiceRequest
{
    /// <summary>
    /// Invoice ID (inv_*).
    /// </summary>
    public required string Id { get; init; }
}
