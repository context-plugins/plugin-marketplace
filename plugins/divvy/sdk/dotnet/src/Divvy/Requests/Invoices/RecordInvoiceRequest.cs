using Divvy.Models;

namespace Divvy.Requests.Invoices;

/// <summary>
/// The inputs of the RecordInvoice operation.
/// </summary>
public sealed record RecordInvoiceRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required RecordInvoiceRequestDto Body { get; init; }
}
