using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

public record ReplyDeletion
{
    /// <summary>
    /// Review ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Always <c>false</c>: the deletion is queued.
    /// </summary>
    [JsonPropertyName("deleted")]
    public string Deleted { get; } = "False";

    [JsonPropertyName("status")]
    public string Status { get; } = "queued";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
