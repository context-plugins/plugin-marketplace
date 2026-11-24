using ApiVerve.Models;

namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Urltitle operation.
/// </summary>
public sealed record UrltitleRequest
{
    public required V1UrltitleRequest Body { get; init; }
}
