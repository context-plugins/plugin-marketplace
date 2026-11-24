using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record WebhookActivityResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("webhook_id")]
    public required string WebhookId { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonPropertyName("status_description")]
    public required string StatusDescription { get; init; }

    [JsonPropertyName("event")]
    public required string Event { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("payload")]
    public required IReadOnlyList<object> Payload { get; init; }

    [JsonPropertyName("response")]
    public required IReadOnlyList<object>? Response { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
