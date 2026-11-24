namespace FlowAccount.Requests.TaxInvoice;

/// <summary>
/// The inputs of the TaxInvoiceDelete operation.
/// </summary>
public sealed record TaxInvoiceDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
