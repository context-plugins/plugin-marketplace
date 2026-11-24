using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

/// <summary>
/// The body of a webhook delivery. Events carry IDs, not full objects; retries keep the same <c>id</c>.
/// </summary>
public record WebhookEventModel
{
    /// <summary>
    /// Event ID (<c>evt_…</c>). De-duplicate by it.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("type")]
    public required WebhookEventType Type { get; init; }

    /// <summary>
    /// When the event happened.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("data")]
    public required object Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
