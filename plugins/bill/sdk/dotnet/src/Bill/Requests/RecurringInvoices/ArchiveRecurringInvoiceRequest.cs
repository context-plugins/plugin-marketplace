using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.RecurringInvoices;

/// <summary>
/// The inputs of the ArchiveRecurringInvoice operation.
/// </summary>
public sealed record ArchiveRecurringInvoiceRequest
{
    [MinLength(1)]
    public required string RecurringInvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
