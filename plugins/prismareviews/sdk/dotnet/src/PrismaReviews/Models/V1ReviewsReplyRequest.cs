using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

public record V1ReviewsReplyRequest
{
    /// <summary>
    /// Reply text, trimmed. 1 to 10,000 characters; the platform's own limit also applies (Google Business Profile 4,096 bytes, App Store 5,970 characters, Google Play 350, eBay 80).
    /// </summary>
    [JsonPropertyName("text")]
    [StringLength(10000, MinimumLength = 1)]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
