using Curlec.Models;

namespace Curlec.Requests.Invoices;

/// <summary>
/// The inputs of the UpdateInvoice operation.
/// </summary>
public sealed record UpdateInvoiceRequest
{
    /// <summary>
    /// Invoice ID (inv_*).
    /// </summary>
    public required string Id { get; init; }

    public required InvoicesRequest1 Body { get; init; }
}
