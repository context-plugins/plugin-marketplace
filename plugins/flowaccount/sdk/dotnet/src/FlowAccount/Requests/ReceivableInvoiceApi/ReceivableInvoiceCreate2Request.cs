using FlowAccount.Models;

namespace FlowAccount.Requests.ReceivableInvoiceApi;

/// <summary>
/// The inputs of the ReceivableInvoiceCreate2 operation.
/// </summary>
public sealed record ReceivableInvoiceCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
