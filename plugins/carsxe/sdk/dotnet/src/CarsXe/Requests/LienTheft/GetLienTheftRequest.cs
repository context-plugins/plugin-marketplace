using System.ComponentModel.DataAnnotations;

namespace CarsXe.Requests.LienTheft;

/// <summary>
/// The inputs of the GetLienTheft operation.
/// </summary>
public sealed record GetLienTheftRequest
{
    /// <summary>
    /// The 17 character long vehicle identification number.
    /// </summary>
    [StringLength(17, MinimumLength = 17)]
    public required string Vin { get; init; }
}
