namespace FlowAccount.Requests.CashInvoice;

/// <summary>
/// The inputs of the CashInvoiceDelete operation.
/// </summary>
public sealed record CashInvoiceDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
