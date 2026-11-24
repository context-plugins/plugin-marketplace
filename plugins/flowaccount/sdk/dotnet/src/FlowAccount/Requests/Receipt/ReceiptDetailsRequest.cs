namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptDetails operation.
/// </summary>
public sealed record ReceiptDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
