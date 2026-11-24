namespace FlowAccount.Requests.ReceivableInvoiceApi;

/// <summary>
/// The inputs of the ReceivableInvoiceDelete operation.
/// </summary>
public sealed record ReceivableInvoiceDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
