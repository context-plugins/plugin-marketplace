namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptDelete operation.
/// </summary>
public sealed record ReceiptDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
