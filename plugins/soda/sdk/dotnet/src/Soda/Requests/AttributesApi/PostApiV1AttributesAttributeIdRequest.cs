using Soda.Models;

namespace Soda.Requests.AttributesApi;

/// <summary>
/// The inputs of the PostApiV1AttributesAttributeId operation.
/// </summary>
public sealed record PostApiV1AttributesAttributeIdRequest
{
    public required string AttributeId { get; init; }

    public required PublicApiUpdateAttributeRequestDto Body { get; init; }
}
