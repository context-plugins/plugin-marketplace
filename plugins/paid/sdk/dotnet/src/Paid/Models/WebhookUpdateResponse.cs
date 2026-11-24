using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record WebhookUpdateResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required WebhookUpdateResponseName Name { get; init; }

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

    /// <summary>
    /// Included on the response of the first save that produced a signing key for this organization (when no webhook had a key yet). Store it now — subsequent reads will not return it; rotate to mint a new one if you lose it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signingSecret")]
    public string? SigningSecret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
