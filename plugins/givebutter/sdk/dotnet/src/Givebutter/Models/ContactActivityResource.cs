using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Models.AnyOf;
using Givebutter.Models.Enums;

namespace Givebutter.Models;

public record ContactActivityResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonPropertyName("data")]
    public required string Data { get; init; }

    [JsonPropertyName("resource")]
    public required Resource1 Resource { get; init; }

    [JsonPropertyName("resource_type")]
    public required ResourceType? ResourceType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_by")]
    public PublicUserResource? CreatedBy { get; init; }

    [JsonPropertyName("occurred_at")]
    public required string OccurredAt { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
