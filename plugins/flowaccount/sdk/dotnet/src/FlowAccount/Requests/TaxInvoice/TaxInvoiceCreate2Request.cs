using FlowAccount.Models;

namespace FlowAccount.Requests.TaxInvoice;

/// <summary>
/// The inputs of the TaxInvoiceCreate2 operation.
/// </summary>
public sealed record TaxInvoiceCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
