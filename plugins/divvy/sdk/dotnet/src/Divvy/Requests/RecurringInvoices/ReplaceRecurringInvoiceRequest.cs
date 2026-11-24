using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.RecurringInvoices;

/// <summary>
/// The inputs of the ReplaceRecurringInvoice operation.
/// </summary>
public sealed record ReplaceRecurringInvoiceRequest
{
    [MinLength(1)]
    public required string RecurringInvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required RecurringInvoiceReplaceRequestDto Body { get; init; }
}
