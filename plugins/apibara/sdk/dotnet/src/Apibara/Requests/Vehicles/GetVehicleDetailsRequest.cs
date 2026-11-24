namespace Apibara.Requests.Vehicles;

/// <summary>
/// The inputs of the GetVehicleDetails operation.
/// </summary>
public sealed record GetVehicleDetailsRequest
{
    /// <summary>
    /// Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number.
    /// </summary>
    public required string SlugVin { get; init; }

    /// <summary>
    /// Optionally embed related detail-page data in the same response. Comma-separated values: history adds retained sale-history records across known Copart/IAAI lots for the VIN; vin_lots adds other known auction lots for the same VIN in summary form. Example: include=history,vin_lots.
    /// </summary>
    public string? Include { get; init; }
}
