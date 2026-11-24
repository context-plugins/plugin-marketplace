using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record UploadResponse
{
    /// <summary>
    /// Set when the bytes matched a recording already in the workspace:
    /// nothing was stored or transcribed, no minutes were used, and
    /// <c>item_id</c> is the existing recording.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicate_of")]
    public long? DuplicateOf { get; init; }

    /// <summary>
    /// ID of the newly-created item. Fetch full metadata at <c>GET /api/items/{id}</c>.
    /// When <c>duplicate_of</c> is set, this is that existing item.
    /// </summary>
    [JsonPropertyName("item_id")]
    public required long ItemId { get; init; }

    /// <summary>
    /// Human-readable status message (e.g. <c>"queued for transcription"</c>).
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
