using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation;
using UiPath.Core.Validation.Attributes;

namespace UiPath.Models;

/// <summary>
/// A webhook subscription that receives Orchestrator event notifications
/// </summary>
public record Webhook
{
    /// <summary>
    /// Unique integer identifier of the webhook
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public long? Id { get; init; }

    /// <summary>
    /// The HTTPS endpoint URL that receives event POST requests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// Whether the webhook is active and sending notifications
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Optional HMAC secret for validating payload signatures via X-UiPath-Signature header
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Secret")]
    public string? Secret { get; init; }

    /// <summary>
    /// Whether to receive all event types or only the specified ones
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SubscribeToAllEvents")]
    public bool? SubscribeToAllEvents { get; init; }

    /// <summary>
    /// Whether to allow webhook delivery to endpoints with invalid SSL certificates
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AllowInsecureSsl")]
    public bool? AllowInsecureSsl { get; init; }

    /// <summary>
    /// List of event type identifiers to subscribe to when SubscribeToAllEvents is false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Events")]
    public IReadOnlyList<string>? Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
