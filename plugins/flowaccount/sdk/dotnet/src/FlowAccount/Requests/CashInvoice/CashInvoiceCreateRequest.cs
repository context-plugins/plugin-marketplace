using FlowAccount.Models;

namespace FlowAccount.Requests.CashInvoice;

/// <summary>
/// The inputs of the CashInvoiceCreate operation.
/// </summary>
public sealed record CashInvoiceCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
