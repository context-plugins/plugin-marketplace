namespace Givebutter.Requests.Households;

/// <summary>
/// The inputs of the HouseholdsShow operation.
/// </summary>
public sealed record HouseholdsShowRequest
{
    /// <summary>
    /// The household ID
    /// </summary>
    public required int Household { get; init; }
}
