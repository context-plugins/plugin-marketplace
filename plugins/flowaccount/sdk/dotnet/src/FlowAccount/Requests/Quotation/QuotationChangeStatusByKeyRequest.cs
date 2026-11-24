namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationChangeStatusByKey operation.
/// </summary>
public sealed record QuotationChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
