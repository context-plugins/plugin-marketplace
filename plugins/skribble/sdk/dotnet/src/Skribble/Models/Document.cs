using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record Document
{
    [JsonPropertyName("documentId")]
    public required string DocumentId { get; init; }

    [JsonPropertyName("documentSha256")]
    public required string DocumentSha256 { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
