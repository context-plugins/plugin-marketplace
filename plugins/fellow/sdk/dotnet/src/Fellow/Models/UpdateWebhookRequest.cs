using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Models.Enums;

namespace Fellow.Models;

/// <summary>
/// Request body for updating a webhook. All fields are optional.
/// </summary>
public record UpdateWebhookRequest
{
    /// <summary>
    /// The URL endpoint that will receive webhook POST requests
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// List of event types to subscribe to. Valid values: 'ai_note.shared_to_channel', 'ai_note.generated', 'action_item.assigned', 'action_item.completed'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled_events")]
    public IReadOnlyList<string>? EnabledEvents { get; init; }

    /// <summary>
    /// Optional description for this webhook endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Webhook status. Valid values: 'active', 'inactive'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusFellowDeveloperWebhooksApi? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
