using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Invoices;

/// <summary>
/// The inputs of the ReplaceInvoice operation.
/// </summary>
public sealed record ReplaceInvoiceRequest
{
    [MinLength(1)]
    public required string InvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required InvoiceReplaceRequestDto Body { get; init; }
}
