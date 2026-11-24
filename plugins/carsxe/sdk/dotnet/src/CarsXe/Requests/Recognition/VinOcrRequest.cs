using CarsXe.Models;

namespace CarsXe.Requests.Recognition;

/// <summary>
/// The inputs of the VinOcr operation.
/// </summary>
public sealed record VinOcrRequest
{
    public required V1VinocrRequest Body { get; init; }
}
