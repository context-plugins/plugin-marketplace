namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationDetails operation.
/// </summary>
public sealed record QuotationDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
