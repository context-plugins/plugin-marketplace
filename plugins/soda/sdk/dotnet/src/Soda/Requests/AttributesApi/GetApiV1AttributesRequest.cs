using Soda.Models.Enums;

namespace Soda.Requests.AttributesApi;

/// <summary>
/// The inputs of the GetApiV1Attributes operation.
/// </summary>
public sealed record GetApiV1AttributesRequest
{
    public int? Page { get; init; }

    public AttributeResourceTypeDto? ResourceType { get; init; }

    public int? Size { get; init; }
}
