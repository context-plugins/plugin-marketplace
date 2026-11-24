namespace FlowAccount.Requests.ReceivableInvoiceApi;

/// <summary>
/// The inputs of the ReceivableInvoiceChangeStatusByKey operation.
/// </summary>
public sealed record ReceivableInvoiceChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
