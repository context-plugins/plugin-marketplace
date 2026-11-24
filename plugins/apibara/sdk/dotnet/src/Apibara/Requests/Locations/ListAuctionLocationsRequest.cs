using Apibara.Core.Validation.Attributes;
using Apibara.Models.Enums;

namespace Apibara.Requests.Locations;

/// <summary>
/// The inputs of the ListAuctionLocations operation.
/// </summary>
public sealed record ListAuctionLocationsRequest
{
    /// <summary>
    /// Auction platform.
    /// </summary>
    public Platform? Platform { get; init; }

    /// <summary>
    /// State code.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// Facility ID.
    /// </summary>
    public string? FacilityId { get; init; }

    /// <summary>
    /// Search by facility name, city, state code, or ZIP.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// ZIP code for location-based search.
    /// </summary>
    public string? Zip { get; init; }

    /// <summary>
    /// Search radius around ZIP.
    /// </summary>
    public double? Radius { get; init; }

    /// <summary>
    /// Distance units.
    /// </summary>
    public Units Units { get; init; } = Units.Mi;

    /// <summary>
    /// Number of records per page. Maximum: 20.
    /// </summary>
    [Minimum(1)]
    [Maximum(20)]
    public int PerPage { get; init; } = 20;
}
