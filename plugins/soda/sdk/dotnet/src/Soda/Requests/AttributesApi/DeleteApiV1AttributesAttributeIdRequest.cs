namespace Soda.Requests.AttributesApi;

/// <summary>
/// The inputs of the DeleteApiV1AttributesAttributeId operation.
/// </summary>
public sealed record DeleteApiV1AttributesAttributeIdRequest
{
    public required string AttributeId { get; init; }
}
