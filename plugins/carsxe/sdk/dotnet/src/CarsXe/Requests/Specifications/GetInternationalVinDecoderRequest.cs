using System.ComponentModel.DataAnnotations;

namespace CarsXe.Requests.Specifications;

/// <summary>
/// The inputs of the GetInternationalVinDecoder operation.
/// </summary>
public sealed record GetInternationalVinDecoderRequest
{
    /// <summary>
    /// The 17 character long vehicle identification number.
    /// </summary>
    [StringLength(17, MinimumLength = 17)]
    public required string Vin { get; init; }
}
