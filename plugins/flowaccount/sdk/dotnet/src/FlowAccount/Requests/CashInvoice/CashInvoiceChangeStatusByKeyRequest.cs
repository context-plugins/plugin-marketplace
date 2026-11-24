namespace FlowAccount.Requests.CashInvoice;

/// <summary>
/// The inputs of the CashInvoiceChangeStatusByKey operation.
/// </summary>
public sealed record CashInvoiceChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
