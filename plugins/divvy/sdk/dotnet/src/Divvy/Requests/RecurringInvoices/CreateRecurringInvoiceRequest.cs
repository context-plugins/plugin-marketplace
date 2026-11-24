using Divvy.Models;

namespace Divvy.Requests.RecurringInvoices;

/// <summary>
/// The inputs of the CreateRecurringInvoice operation.
/// </summary>
public sealed record CreateRecurringInvoiceRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateRecurringInvoiceRequestDto Body { get; init; }
}
