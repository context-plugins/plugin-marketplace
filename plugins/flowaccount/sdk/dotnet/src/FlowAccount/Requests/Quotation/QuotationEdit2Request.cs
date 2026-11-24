using FlowAccount.Models;

namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationEdit2 operation.
/// </summary>
public sealed record QuotationEdit2Request
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
