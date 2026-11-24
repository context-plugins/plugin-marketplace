using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Core.Validation;
using Beehiiv.Core.Validation.Attributes;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record Webhook
{
    /// <summary>
    /// The prefixed ID for the webhook.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The webhook URL to send events to.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// The date the webhook was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    /// <summary>
    /// The date the webhook was last updated. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("updated")]
    public required int Updated { get; init; }

    /// <summary>
    /// The types of events the webhook will receive.
    /// </summary>
    [JsonPropertyName("event_types")]
    public required IReadOnlyList<WebhookEventType> EventTypes { get; init; }

    /// <summary>
    /// The user-defined description for the webhook.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
