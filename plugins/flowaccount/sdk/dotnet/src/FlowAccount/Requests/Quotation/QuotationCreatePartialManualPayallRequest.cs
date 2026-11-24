namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationCreatePartialManualPayall operation.
/// </summary>
public sealed record QuotationCreatePartialManualPayallRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
