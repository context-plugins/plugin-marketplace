using System;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

/// <summary>
/// Webhook delivery status. Present on <c>COMPLETED</c> and <c>FAILED</c> tasks created with a <c>webhook.url</c>.
/// </summary>
public record Webhook1
{
    /// <summary>
    /// The <c>webhook.url</c> you set when creating the task.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// When your endpoint acknowledged the webhook with a <c>2xx</c>. Null until then.
    /// </summary>
    [JsonPropertyName("deliveredAt")]
    public required DateTimeOffset? DeliveredAt { get; init; }

    /// <summary>
    /// Whether your endpoint has acknowledged the webhook with a <c>2xx</c>.
    /// </summary>
    [JsonPropertyName("delivered")]
    public required bool Delivered { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
