using System.Collections.Generic;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

/// <summary>
/// Not paginated, and without <c>next_cursor</c>.
/// </summary>
public record WebhookList
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Webhook> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
