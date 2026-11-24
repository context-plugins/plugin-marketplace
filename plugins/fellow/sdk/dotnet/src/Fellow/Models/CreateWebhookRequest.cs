using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Models.Enums;

namespace Fellow.Models;

/// <summary>
/// Request body for creating a webhook.
/// </summary>
public record CreateWebhookRequest
{
    /// <summary>
    /// The URL endpoint that will receive webhook POST requests
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// List of event types to subscribe to. Valid values: 'ai_note.shared_to_channel', 'ai_note.generated', 'action_item.assigned', 'action_item.completed'.
    /// </summary>
    [JsonPropertyName("enabled_events")]
    public required IReadOnlyList<string> EnabledEvents { get; init; }

    /// <summary>
    /// Optional description for this webhook endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; } = "";

    /// <summary>
    /// Webhook status. Valid values: 'active', 'inactive'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusFellowDeveloperWebhooksApi? Status { get; init; } = StatusFellowDeveloperWebhooksApi.Active;

    /// <summary>
    /// Who the webhook belongs to. 'user' is the authenticated user, the default and the existing behaviour. 'workspace' is the whole account: it receives every matching event with no per-user filter, and each event is delivered once rather than once per attendee. Creating one requires a privileged API key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public ScopeFellowDeveloperWebhooksApi? Scope { get; init; } = ScopeFellowDeveloperWebhooksApi.User;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
