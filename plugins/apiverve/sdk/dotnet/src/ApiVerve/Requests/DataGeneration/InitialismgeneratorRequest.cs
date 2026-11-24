using ApiVerve.Models;

namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Initialismgenerator operation.
/// </summary>
public sealed record InitialismgeneratorRequest
{
    public required V1InitialismgeneratorRequest Body { get; init; }
}
