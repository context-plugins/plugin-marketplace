using ApiVerve.Models;

namespace ApiVerve.Requests.Parsers;

/// <summary>
/// The inputs of the Rsstojson operation.
/// </summary>
public sealed record RsstojsonRequest
{
    public required V1RsstojsonRequest Body { get; init; }
}
