using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record EnabledEvent
{
    /// <summary>
    /// The API entity for which you want to receive webhook events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public string? Entity { get; init; }

    /// <summary>
    /// A list of webhook event types you want to receive for the specified <c>entity</c>.
    /// <para>
    /// See the <see href="/additional-resources/developers/webhooks/webhook-events">Webhook Events</see> guide to learn which values are accepted for each entity.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("types")]
    public IReadOnlyList<string>? Types { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
