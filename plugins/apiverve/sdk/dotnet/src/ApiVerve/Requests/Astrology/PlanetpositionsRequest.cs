using ApiVerve.Models;

namespace ApiVerve.Requests.Astrology;

/// <summary>
/// The inputs of the Planetpositions operation.
/// </summary>
public sealed record PlanetpositionsRequest
{
    public required V1PlanetpositionsRequest Body { get; init; }
}
