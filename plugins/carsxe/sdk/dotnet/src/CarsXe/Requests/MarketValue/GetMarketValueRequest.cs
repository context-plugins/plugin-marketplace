using System.ComponentModel.DataAnnotations;
using CarsXe.Models.Enums;

namespace CarsXe.Requests.MarketValue;

/// <summary>
/// The inputs of the GetMarketValue operation.
/// </summary>
public sealed record GetMarketValueRequest
{
    /// <summary>
    /// The 17 character long vehicle identification number.
    /// </summary>
    [StringLength(17, MinimumLength = 17)]
    public required string Vin { get; init; }

    /// <summary>
    /// The format of the response. One of <c>json</c> or <c>xml</c>.
    /// </summary>
    public Format Format { get; init; } = Format.Json;
}
