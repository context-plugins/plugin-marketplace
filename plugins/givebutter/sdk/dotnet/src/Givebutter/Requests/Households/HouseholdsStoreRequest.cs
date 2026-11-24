using Givebutter.Models;

namespace Givebutter.Requests.Households;

/// <summary>
/// The inputs of the HouseholdsStore operation.
/// </summary>
public sealed record HouseholdsStoreRequest
{
    public required HouseholdStoreRequest Body { get; init; }
}
