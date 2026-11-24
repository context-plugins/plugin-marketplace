namespace Givebutter.Requests.Households;

/// <summary>
/// The inputs of the HouseholdsDestroy operation.
/// </summary>
public sealed record HouseholdsDestroyRequest
{
    /// <summary>
    /// The household ID
    /// </summary>
    public required int Household { get; init; }
}
