using System.Collections.Generic;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

/// <summary>
/// One-off free reads (100 per account, never renewed) to try Google Maps and Tripadvisor with real data.
/// </summary>
public record FreeTrial
{
    /// <summary>
    /// <c>verify_email</c>: verify the account email first. <c>not_applicable</c>: the workspace has paid reads of its own, used instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusPrismaReviewsUsageApi? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reads")]
    public int? Reads { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("used")]
    public int? Used { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("left")]
    public int? Left { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platforms")]
    public IReadOnlyList<string>? Platforms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
