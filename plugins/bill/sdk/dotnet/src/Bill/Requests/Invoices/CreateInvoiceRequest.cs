using Bill.Models;

namespace Bill.Requests.Invoices;

/// <summary>
/// The inputs of the CreateInvoice operation.
/// </summary>
public sealed record CreateInvoiceRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required InvoiceCreateRequestDto Body { get; init; }
}
