using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Validation;
using PrismaReviews.Core.Validation.Attributes;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record V1WebhooksRequest
{
    /// <summary>
    /// Your endpoint. Must start with <c>https://</c>.
    /// </summary>
    [JsonPropertyName("url")]
    [RegularExpression("^https://")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Event types to receive, or <c>["*"]</c> for all of them (the default).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    [MinLength(1)]
    public IReadOnlyList<WebhookEventFilter>? Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
