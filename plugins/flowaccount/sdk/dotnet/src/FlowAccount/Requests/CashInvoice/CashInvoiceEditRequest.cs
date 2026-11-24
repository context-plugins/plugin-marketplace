using FlowAccount.Models;

namespace FlowAccount.Requests.CashInvoice;

/// <summary>
/// The inputs of the CashInvoiceEdit operation.
/// </summary>
public sealed record CashInvoiceEditRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
