using ApiVerve.Models;

namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Caaparser operation.
/// </summary>
public sealed record CaaparserRequest
{
    public required V1CaaparserRequest Body { get; init; }
}
