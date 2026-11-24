namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationDelete operation.
/// </summary>
public sealed record QuotationDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
