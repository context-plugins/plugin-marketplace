using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Invoices;

/// <summary>
/// The inputs of the ArchiveInvoice operation.
/// </summary>
public sealed record ArchiveInvoiceRequest
{
    [MinLength(1)]
    public required string InvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
