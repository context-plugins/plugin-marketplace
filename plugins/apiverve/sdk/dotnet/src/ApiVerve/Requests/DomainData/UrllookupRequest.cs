using ApiVerve.Models;

namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Urllookup operation.
/// </summary>
public sealed record UrllookupRequest
{
    public required V1UrllookupRequest Body { get; init; }
}
