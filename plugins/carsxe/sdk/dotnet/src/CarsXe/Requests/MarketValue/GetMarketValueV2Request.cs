using System.ComponentModel.DataAnnotations;
using CarsXe.Models.Enums;

namespace CarsXe.Requests.MarketValue;

/// <summary>
/// The inputs of the GetMarketValueV2 operation.
/// </summary>
public sealed record GetMarketValueV2Request
{
    /// <summary>
    /// The 17 character long vehicle identification number.
    /// </summary>
    [StringLength(17, MinimumLength = 17)]
    public required string Vin { get; init; }

    /// <summary>
    /// The US state of the vehicle to get the market value for.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// The current mileage of the vehicle used to adjust the market value. Must be a valid numeric value.
    /// </summary>
    public double? Mileage { get; init; }

    /// <summary>
    /// The overall condition of the vehicle.
    /// </summary>
    public Condition? Condition { get; init; }
}
