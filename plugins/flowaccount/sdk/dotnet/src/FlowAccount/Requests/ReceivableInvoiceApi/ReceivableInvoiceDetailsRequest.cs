namespace FlowAccount.Requests.ReceivableInvoiceApi;

/// <summary>
/// The inputs of the ReceivableInvoiceDetails operation.
/// </summary>
public sealed record ReceivableInvoiceDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
