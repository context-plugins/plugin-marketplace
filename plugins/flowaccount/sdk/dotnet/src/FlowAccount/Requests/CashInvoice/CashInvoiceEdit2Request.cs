using FlowAccount.Models;

namespace FlowAccount.Requests.CashInvoice;

/// <summary>
/// The inputs of the CashInvoiceEdit2 operation.
/// </summary>
public sealed record CashInvoiceEdit2Request
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
