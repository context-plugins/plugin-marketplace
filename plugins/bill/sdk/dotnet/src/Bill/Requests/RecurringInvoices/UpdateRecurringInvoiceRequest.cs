using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.RecurringInvoices;

/// <summary>
/// The inputs of the UpdateRecurringInvoice operation.
/// </summary>
public sealed record UpdateRecurringInvoiceRequest
{
    [MinLength(1)]
    public required string RecurringInvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdateRecurringInvoiceRequestDto Body { get; init; }
}
