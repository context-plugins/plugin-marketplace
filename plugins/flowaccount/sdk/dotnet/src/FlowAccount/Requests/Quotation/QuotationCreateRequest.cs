using FlowAccount.Models;

namespace FlowAccount.Requests.Quotation;

/// <summary>
/// The inputs of the QuotationCreate operation.
/// </summary>
public sealed record QuotationCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
