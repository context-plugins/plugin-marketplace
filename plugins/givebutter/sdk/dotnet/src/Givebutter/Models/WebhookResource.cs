using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record WebhookResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signature")]
    public string? Signature { get; init; }

    [JsonPropertyName("events")]
    public required IReadOnlyList<object> Events { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("last_status")]
    public required string LastStatus { get; init; }

    [JsonPropertyName("last_status_description")]
    public required string LastStatusDescription { get; init; }

    [JsonPropertyName("last_used_at")]
    public required string LastUsedAt { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
