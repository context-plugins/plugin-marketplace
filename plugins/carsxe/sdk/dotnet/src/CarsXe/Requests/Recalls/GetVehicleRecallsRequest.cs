using System.ComponentModel.DataAnnotations;

namespace CarsXe.Requests.Recalls;

/// <summary>
/// The inputs of the GetVehicleRecalls operation.
/// </summary>
public sealed record GetVehicleRecallsRequest
{
    /// <summary>
    /// The 17 character long vehicle identification number.
    /// </summary>
    [StringLength(17, MinimumLength = 17)]
    public required string Vin { get; init; }
}
