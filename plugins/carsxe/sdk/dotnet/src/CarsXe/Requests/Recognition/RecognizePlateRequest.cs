using CarsXe.Models;

namespace CarsXe.Requests.Recognition;

/// <summary>
/// The inputs of the RecognizePlate operation.
/// </summary>
public sealed record RecognizePlateRequest
{
    public required PlaterecognitionRequest Body { get; init; }
}
