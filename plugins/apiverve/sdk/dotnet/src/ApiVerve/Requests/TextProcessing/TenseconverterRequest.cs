using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Tenseconverter operation.
/// </summary>
public sealed record TenseconverterRequest
{
    public required V1TenseconverterRequest Body { get; init; }
}
