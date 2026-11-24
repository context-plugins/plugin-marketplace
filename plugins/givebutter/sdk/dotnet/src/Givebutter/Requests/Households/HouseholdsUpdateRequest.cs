using Givebutter.Models;

namespace Givebutter.Requests.Households;

/// <summary>
/// The inputs of the HouseholdsUpdate operation.
/// </summary>
public sealed record HouseholdsUpdateRequest
{
    /// <summary>
    /// The household ID
    /// </summary>
    public required int Household { get; init; }

    public HouseholdUpdateRequest? Body { get; init; }
}
