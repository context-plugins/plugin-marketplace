using DidLogic.Models;

namespace DidLogic.Requests.NumbersInventory;

/// <summary>
/// The inputs of the NumbersPurchaseCreate operation.
/// </summary>
public sealed record NumbersPurchaseCreateRequest
{
    public required ApiV2NumbersPurchaseRequest Body { get; init; }
}
