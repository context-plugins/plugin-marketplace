using Apibara.Core.Validation.Attributes;

namespace Apibara.Requests.VehicleAuction;

/// <summary>
/// The inputs of the GetVehicleSellerReserve operation.
/// </summary>
public sealed record GetVehicleSellerReserveRequest
{
    /// <summary>
    /// Vehicle VIN, lot number, LOT-IAAI-&lt;lot&gt; or lot slug.
    /// </summary>
    public required string SlugVin { get; init; }

    /// <summary>
    /// Include recent reserve observations.
    /// </summary>
    public bool IncludeEvents { get; init; } = false;

    /// <summary>
    /// Maximum number of events.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;
}
