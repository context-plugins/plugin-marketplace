using FlowAccount.Models;

namespace FlowAccount.Requests.Purchase;

/// <summary>
/// The inputs of the PurchaseCreate operation.
/// </summary>
public sealed record PurchaseCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
