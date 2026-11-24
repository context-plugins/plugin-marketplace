namespace FlowAccount.Requests.Purchase;

/// <summary>
/// The inputs of the PurchaseDetails operation.
/// </summary>
public sealed record PurchaseDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
