using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Validation;
using PrismaReviews.Core.Validation.Attributes;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record Webhook
{
    /// <summary>
    /// Webhook endpoint ID (<c>we_…</c>).
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The endpoint.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonPropertyName("events")]
    public required IReadOnlyList<WebhookEventFilter> Events { get; init; }

    /// <summary>
    /// Whether it receives deliveries.
    /// </summary>
    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    /// <summary>
    /// When it was registered.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
