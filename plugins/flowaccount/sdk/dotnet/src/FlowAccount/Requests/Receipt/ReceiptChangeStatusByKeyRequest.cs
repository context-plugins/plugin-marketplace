namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptChangeStatusByKey operation.
/// </summary>
public sealed record ReceiptChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
