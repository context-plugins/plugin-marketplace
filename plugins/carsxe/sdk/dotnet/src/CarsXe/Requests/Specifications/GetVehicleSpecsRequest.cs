using System.ComponentModel.DataAnnotations;
using CarsXe.Models.Enums;

namespace CarsXe.Requests.Specifications;

/// <summary>
/// The inputs of the GetVehicleSpecs operation.
/// </summary>
public sealed record GetVehicleSpecsRequest
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

    /// <summary>
    /// Request extra data. Set to <c>1</c> to use. Significantly slower than the regular request but retrieves additional data.
    /// </summary>
    public Deepdata? Deepdata { get; init; }

    /// <summary>
    /// Set to <c>1</c> to disable the International VIN decoding fallback and return an error instead of a potential partial response.
    /// </summary>
    public DisableIntVinDecoding? DisableIntVinDecoding { get; init; }
}
