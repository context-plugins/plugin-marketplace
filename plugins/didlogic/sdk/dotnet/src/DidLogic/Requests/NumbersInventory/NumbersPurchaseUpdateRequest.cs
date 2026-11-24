using DidLogic.Models;

namespace DidLogic.Requests.NumbersInventory;

/// <summary>
/// The inputs of the NumbersPurchaseUpdate operation.
/// </summary>
public sealed record NumbersPurchaseUpdateRequest
{
    public required ApiV2NumbersPurchaseRequest1 Body { get; init; }
}
