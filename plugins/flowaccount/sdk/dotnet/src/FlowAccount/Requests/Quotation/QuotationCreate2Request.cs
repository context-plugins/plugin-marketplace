using FlowAccount.Models;

namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationCreate2 operation.
/// </summary>
public sealed record QuotationCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
