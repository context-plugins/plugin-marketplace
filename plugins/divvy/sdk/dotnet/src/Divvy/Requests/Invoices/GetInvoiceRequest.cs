using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Invoices;

/// <summary>
/// The inputs of the GetInvoice operation.
/// </summary>
public sealed record GetInvoiceRequest
{
    [MinLength(1)]
    public required string InvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
