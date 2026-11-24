using System.Collections.Generic;

namespace DidLogic.Requests.NumbersInventory;

/// <summary>
/// The inputs of the NumbersPurchaseDestroy operation.
/// </summary>
public sealed record NumbersPurchaseDestroyRequest
{
    /// <summary>
    /// Array of DID IDs to cancel, from numbers_index
    /// </summary>
    public IReadOnlyList<int>? IdIn { get; init; }

    /// <summary>
    /// Array of DID numbers to cancel, from numbers_index, purchases_index
    /// </summary>
    public IReadOnlyList<string>? DidNumbers { get; init; }
}
