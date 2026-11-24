using Apibara.Core.Validation.Attributes;

namespace Apibara.Requests.VehicleHistory;

/// <summary>
/// The inputs of the GetVehicleHistory operation.
/// </summary>
public sealed record GetVehicleHistoryRequest
{
    /// <summary>
    /// Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number.
    /// </summary>
    public required string SlugVin { get; init; }

    /// <summary>
    /// Number of records per page. Maximum: 20.
    /// </summary>
    [Minimum(1)]
    [Maximum(20)]
    public int PerPage { get; init; } = 20;

    /// <summary>
    /// Cursor for pagination.
    /// </summary>
    public string? Cursor { get; init; }
}
