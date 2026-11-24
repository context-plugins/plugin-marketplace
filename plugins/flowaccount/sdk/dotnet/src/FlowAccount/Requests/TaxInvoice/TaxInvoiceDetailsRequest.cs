namespace FlowAccount.Requests.TaxInvoice;

/// <summary>
/// The inputs of the TaxInvoiceDetails operation.
/// </summary>
public sealed record TaxInvoiceDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
