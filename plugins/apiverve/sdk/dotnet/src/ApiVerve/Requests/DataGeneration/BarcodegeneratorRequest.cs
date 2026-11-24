using ApiVerve.Models;

namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Barcodegenerator operation.
/// </summary>
public sealed record BarcodegeneratorRequest
{
    public required V1BarcodegeneratorRequest Body { get; init; }
}
