using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Invoices;

/// <summary>
/// The inputs of the RestoreInvoice operation.
/// </summary>
public sealed record RestoreInvoiceRequest
{
    [MinLength(1)]
    public required string InvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
