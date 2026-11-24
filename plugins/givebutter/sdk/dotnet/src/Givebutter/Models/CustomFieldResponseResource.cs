using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record CustomFieldResponseResource
{
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    [JsonPropertyName("field_id")]
    public required int FieldId { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
