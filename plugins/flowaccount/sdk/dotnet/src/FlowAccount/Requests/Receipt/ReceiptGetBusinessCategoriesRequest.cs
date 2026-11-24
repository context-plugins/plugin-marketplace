namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptGetBusinessCategories operation.
/// </summary>
public sealed record ReceiptGetBusinessCategoriesRequest
{
    public required string Culture { get; init; }
}
