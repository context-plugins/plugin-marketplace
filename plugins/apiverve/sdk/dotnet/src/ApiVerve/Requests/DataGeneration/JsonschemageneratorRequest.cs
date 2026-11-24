using ApiVerve.Models;

namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Jsonschemagenerator operation.
/// </summary>
public sealed record JsonschemageneratorRequest
{
    public required V1JsonschemageneratorRequest Body { get; init; }
}
