using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Invoices;

/// <summary>
/// The inputs of the UpdateInvoice operation.
/// </summary>
public sealed record UpdateInvoiceRequest
{
    [MinLength(1)]
    public required string InvoiceId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required InvoiceUpdateRequestDto Body { get; init; }
}
