using FlowAccount.Models;

namespace FlowAccount.Requests.ReceivableInvoiceApi;

/// <summary>
/// The inputs of the ReceivableInvoiceCreate operation.
/// </summary>
public sealed record ReceivableInvoiceCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
