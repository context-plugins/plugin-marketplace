using FlowAccount.Models;

namespace FlowAccount.Requests.TaxInvoice;

/// <summary>
/// The inputs of the TaxInvoiceEdit2 operation.
/// </summary>
public sealed record TaxInvoiceEdit2Request
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
