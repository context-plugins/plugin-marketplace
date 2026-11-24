using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Levenshteindistance operation.
/// </summary>
public sealed record LevenshteindistanceRequest
{
    public required V1LevenshteindistanceRequest Body { get; init; }
}
