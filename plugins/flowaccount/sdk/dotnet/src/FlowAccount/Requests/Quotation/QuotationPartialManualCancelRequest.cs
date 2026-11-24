namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationPartialManualCancel operation.
/// </summary>
public sealed record QuotationPartialManualCancelRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
