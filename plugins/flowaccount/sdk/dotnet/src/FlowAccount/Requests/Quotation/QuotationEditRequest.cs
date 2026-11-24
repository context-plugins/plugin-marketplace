using FlowAccount.Models;

namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationEdit operation.
/// </summary>
public sealed record QuotationEditRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
