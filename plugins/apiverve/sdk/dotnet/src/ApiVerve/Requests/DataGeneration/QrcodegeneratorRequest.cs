using ApiVerve.Models;

namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Qrcodegenerator operation.
/// </summary>
public sealed record QrcodegeneratorRequest
{
    public required V1QrcodegeneratorRequest Body { get; init; }
}
