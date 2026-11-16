using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record Webhook
{
    /// <summary>
    /// The ID of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// Timestamp of when the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of when the object was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// Credentials included in webhook POST requests so your server can confirm each request originated from Finix.
    /// <para>
    /// To learn about the different authentication methods, see <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#managing-webhooks-via-api">Managing Webhooks via API</see>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authentication")]
    public Authentication4? Authentication { get; init; }

    /// <summary>
    /// Whether the <c>Webhook</c> is enabled. Disabled webhooks will not receive events.
    /// <list type="bullet">
    ///   <item><description><c>true</c>: Events are sent to the <c>url</c>.</description></item>
    ///   <item><description><c>false</c>: Events are not sent to the <c>url</c>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; } = true;

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
    /// Whether the <c>Webhook</c> is currently accepting events; this field mirrors the <c>enabled</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_accepting_events")]
    public bool? IsAcceptingEvents { get; init; }

    /// <summary>
    /// A human-readable name for the <c>Webhook</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nickname")]
    public string? Nickname { get; init; }

    /// <summary>
    /// The time when the previous <c>secret_signing_key</c> expires. Set when the signing key is rotated; <c>null</c> on initial creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_secret_expires_at")]
    public string? PreviousSecretExpiresAt { get; init; }

    /// <summary>
    /// Use this key to verify the <c>Finix-Signature</c> header on incoming webhook events, confirming the payload came from Finix, was not tampered with, and was sent recently. For details, see <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#verifying-webhook-signatures-finix-signature">Verifying Webhook Signatures</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secret_signing_key")]
    public string? SecretSigningKey { get; init; }

    /// <summary>
    /// The HTTP or HTTPS URL to receive events. When an event occurs, Finix sends a POST request to this URL with the webhook event payload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links10? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
