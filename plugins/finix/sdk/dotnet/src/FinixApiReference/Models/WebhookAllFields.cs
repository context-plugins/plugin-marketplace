using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record WebhookAllFields
{
    /// <summary>
    /// Credentials included in webhook POST requests so your server can confirm each request originated from Finix.
    /// <para>
    /// To learn about the different authentication methods, see <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#managing-webhooks-via-api">Managing Webhooks via API</see>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authentication")]
    public AuthenticationModel? Authentication { get; init; }

    /// <summary>
    /// A list of webhook events to enable for API entities.
    /// <para>
    /// There can be only one enabled event object per <c>entity</c>.
    /// </para>
    /// <para>
    /// This list is optional and overrides default webhook events. See <see href="/additional-resources/developers/webhooks/webhook-events">Webhook Events</see> to learn which events are automatically subscribed at creation.
    /// </para>
    /// <para>
    /// When included in a PUT request, this list replaces all previously configured events.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled_events")]
    public IReadOnlyList<EnabledEvent>? EnabledEvents { get; init; }

    /// <summary>
    /// A human-readable name for the <c>Webhook</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nickname")]
    public string? Nickname { get; init; }

    /// <summary>
    /// The HTTP or HTTPS URL to receive events. When an event occurs, Finix sends a POST request to this URL with the webhook event payload.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
