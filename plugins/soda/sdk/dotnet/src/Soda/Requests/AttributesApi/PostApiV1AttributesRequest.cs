using Soda.Models;

namespace Soda.Requests.AttributesApi;

/// <summary>
/// The inputs of the PostApiV1Attributes operation.
/// </summary>
public sealed record PostApiV1AttributesRequest
{
    public required PublicApiCreateAttributeRequestDto Body { get; init; }
}
