using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Jsontojsonp operation.
/// </summary>
public sealed record JsontojsonpRequest
{
    public required V1JsontojsonpRequest Body { get; init; }
}
