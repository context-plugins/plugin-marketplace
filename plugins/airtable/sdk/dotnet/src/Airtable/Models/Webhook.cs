using System;
using System.Text.Json.Serialization;
using Airtable.Core.Models;
using Airtable.Core.Validation;
using Airtable.Core.Validation.Attributes;

namespace Airtable.Models;

/// <summary>
/// A webhook subscription on an Airtable base.
/// </summary>
public record Webhook
{
    /// <summary>
    /// The unique identifier of the webhook.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The type of the webhook (e.g., client).
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Whether the webhook is currently active.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isHookEnabled")]
    public bool? IsHookEnabled { get; init; }

    /// <summary>
    /// The URL that receives webhook notifications.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notificationUrl")]
    [Format(FormatKind.Uri)]
    public string? NotificationUrl { get; init; }

    /// <summary>
    /// The cursor position for the next unread payload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursorForNextPayload")]
    public int? CursorForNextPayload { get; init; }

    /// <summary>
    /// Whether notifications are currently being sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("areNotificationsEnabled")]
    public bool? AreNotificationsEnabled { get; init; }

    /// <summary>
    /// The time when the webhook was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// The time when the webhook will expire if not refreshed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expirationTime")]
    public DateTimeOffset? ExpirationTime { get; init; }

    /// <summary>
    /// The specification defining what changes the webhook monitors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specification")]
    public WebhookSpecification? Specification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
