using FlowAccount.Models;

namespace FlowAccount.Requests.ReceivableInvoiceApi;

/// <summary>
/// The inputs of the ReceivableInvoiceEdit operation.
/// </summary>
public sealed record ReceivableInvoiceEditRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
