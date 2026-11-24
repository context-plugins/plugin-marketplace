using System;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// Response after creating a new webhook, including the MAC secret.
/// </summary>
public record WebhookCreateResponse
{
    /// <summary>
    /// The unique identifier of the newly created webhook.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The Base64-encoded MAC secret used to verify the authenticity of webhook notification payloads.
    /// </summary>
    [JsonPropertyName("macSecretBase64")]
    public required string MacSecretBase64 { get; init; }

    /// <summary>
    /// The time when the webhook will expire if not refreshed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expirationTime")]
    public DateTimeOffset? ExpirationTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
