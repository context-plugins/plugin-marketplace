using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Core.Validation;
using Beehiiv.Core.Validation.Attributes;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record PublicationsWebhooksRequest
{
    /// <summary>
    /// The webhook URL to send events to.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// The types of events the webhook will receive.
    /// </summary>
    [JsonPropertyName("event_types")]
    public required IReadOnlyList<WebhookEventType> EventTypes { get; init; }

    /// <summary>
    /// A description of the webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
