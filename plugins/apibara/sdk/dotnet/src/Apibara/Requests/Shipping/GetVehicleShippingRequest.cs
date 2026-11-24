namespace Apibara.Requests.Shipping;

/// <summary>
/// The inputs of the GetVehicleShipping operation.
/// </summary>
public sealed record GetVehicleShippingRequest
{
    /// <summary>
    /// Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number.
    /// </summary>
    public required string SlugVin { get; init; }

    /// <summary>
    /// Comma-separated list of destination ports to return.
    /// </summary>
    public string? Ports { get; init; }
}
