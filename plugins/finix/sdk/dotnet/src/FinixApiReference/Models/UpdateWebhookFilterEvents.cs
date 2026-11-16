using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record UpdateWebhookFilterEvents
{
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
