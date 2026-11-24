using CarsXe.Models.Enums;

namespace CarsXe.Requests.PlateDecoder;

/// <summary>
/// The inputs of the DecodeUsPlate operation.
/// </summary>
public sealed record DecodeUsPlateRequest
{
    /// <summary>
    /// The vehicle registration number or license plate number.
    /// </summary>
    public required string Plate { get; init; }

    /// <summary>
    /// Two-letter abbreviation for one of the 50 US states, the District of Columbia (<c>DC</c>), or Puerto Rico (<c>PR</c>).
    /// </summary>
    public required string State { get; init; }

    /// <summary>
    /// Set to <c>true</c> or <c>1</c> to decode the resolved VIN and include a <c>vehicle_specs</c> object in the response (identical in shape to the Specifications endpoint response).
    /// </summary>
    public DecodeVin? DecodeVin { get; init; }
}
