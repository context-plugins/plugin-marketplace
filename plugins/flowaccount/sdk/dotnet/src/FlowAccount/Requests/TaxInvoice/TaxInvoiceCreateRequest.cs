using FlowAccount.Models;

namespace FlowAccount.Requests.TaxInvoice;

/// <summary>
/// The inputs of the TaxInvoiceCreate operation.
/// </summary>
public sealed record TaxInvoiceCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
