namespace FlowAccount.Requests.CashInvoice;

/// <summary>
/// The inputs of the CashInvoiceDetails operation.
/// </summary>
public sealed record CashInvoiceDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
