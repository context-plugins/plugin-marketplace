using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record Webhook
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required WebhookName Name { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("url")]
    public required string? Url { get; init; }

    [JsonPropertyName("lastSentAt")]
    public required DateTimeOffset? LastSentAt { get; init; }

    [JsonPropertyName("lastStatus")]
    public required WebhookDeliveryStatus LastStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
