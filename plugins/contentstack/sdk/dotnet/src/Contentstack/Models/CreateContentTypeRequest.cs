using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Parameters for creating or updating a content type.
/// </summary>
public record CreateContentTypeRequest
{
    [JsonPropertyName("content_type")]
    public required ContentType1 ContentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
