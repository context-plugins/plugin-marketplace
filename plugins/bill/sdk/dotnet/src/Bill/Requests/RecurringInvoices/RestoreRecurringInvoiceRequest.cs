using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.RecurringInvoices;

/// <summary>
/// The inputs of the RestoreRecurringInvoice operation.
/// </summary>
public sealed record RestoreRecurringInvoiceRequest
{
    [MinLength(1)]
    public required string RecurringInvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
