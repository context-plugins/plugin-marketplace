using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.RecurringInvoices;

/// <summary>
/// The inputs of the GetRecurringInvoice operation.
/// </summary>
public sealed record GetRecurringInvoiceRequest
{
    [MinLength(1)]
    public required string RecurringInvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
