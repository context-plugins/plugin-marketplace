namespace FlowAccount.Requests.TaxInvoice;

/// <summary>
/// The inputs of the TaxInvoiceChangeStatusByKey operation.
/// </summary>
public sealed record TaxInvoiceChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
