using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

public record UpdateWebhookAllFields
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
    /// Enable or disable the <c>Webhook</c>. Disabled webhooks will not receive events.
    /// <list type="bullet">
    ///   <item><description><c>true</c> - webhook events are sent to the <c>url</c>.</description></item>
    ///   <item><description><c>false</c> - webhook events are not sent to the <c>url</c>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

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
    /// Triggers rotation of the <c>Webhook</c>'s HMAC signing key. When <c>true</c>, the current key is stored as the previous key, a new key is generated, and the new secret is returned in the response.
    /// <para>
    /// Requires <c>previous_secret_active_hours</c> to be set.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generate_new_secret")]
    public bool? GenerateNewSecret { get; init; } = false;

    /// <summary>
    /// A human-readable name for the <c>Webhook</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nickname")]
    public string? Nickname { get; init; }

    /// <summary>
    /// Controls how long the old signing key remains valid alongside the new one during rotation. Both keys can verify signatures during this window. A value of <c>0</c> means the old key expires immediately.
    /// <para>
    /// Required when <c>generate_new_secret</c> is <c>true</c>; forbidden otherwise.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_secret_active_hours")]
    [Minimum(0)]
    [Maximum(24)]
    public int? PreviousSecretActiveHours { get; init; }

    /// <summary>
    /// The HTTP or HTTPS URL to receive events. When an event occurs, Finix sends a POST request to this URL with the webhook event payload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
