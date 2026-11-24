using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Jsontocsv operation.
/// </summary>
public sealed record JsontocsvRequest
{
    public required V1JsontocsvRequest Body { get; init; }
}
