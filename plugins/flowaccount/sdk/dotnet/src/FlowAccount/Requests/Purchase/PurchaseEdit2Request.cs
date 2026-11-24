using FlowAccount.Models;

namespace FlowAccount.Requests.Purchase;

/// <summary>
/// The inputs of the PurchaseEdit2 operation.
/// </summary>
public sealed record PurchaseEdit2Request
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
