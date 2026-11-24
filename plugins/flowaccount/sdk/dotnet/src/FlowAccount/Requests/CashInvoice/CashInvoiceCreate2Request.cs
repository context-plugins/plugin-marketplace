using FlowAccount.Models;

namespace FlowAccount.Requests.CashInvoice;

/// <summary>
/// The inputs of the CashInvoiceCreate2 operation.
/// </summary>
public sealed record CashInvoiceCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
