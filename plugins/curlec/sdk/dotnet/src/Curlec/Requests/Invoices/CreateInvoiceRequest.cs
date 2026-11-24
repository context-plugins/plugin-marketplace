using Curlec.Models;

namespace Curlec.Requests.Invoices;

/// <summary>
/// The inputs of the CreateInvoice operation.
/// </summary>
public sealed record CreateInvoiceRequest
{
    public required InvoicesRequest Body { get; init; }
}
