namespace FlowAccount.Requests.TaxInvoice;

/// <summary>
/// The inputs of the TaxInvoiceGetCumulativeDocumentReferenceList operation.
/// </summary>
public sealed record TaxInvoiceGetCumulativeDocumentReferenceListRequest
{
    public required string Culture { get; init; }

    public string? Ids { get; init; }
}
