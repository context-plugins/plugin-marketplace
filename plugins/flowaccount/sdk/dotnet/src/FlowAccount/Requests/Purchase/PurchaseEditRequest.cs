using FlowAccount.Models;

namespace FlowAccount.Requests.Purchase;

/// <summary>
/// The inputs of the PurchaseEdit operation.
/// </summary>
public sealed record PurchaseEditRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
