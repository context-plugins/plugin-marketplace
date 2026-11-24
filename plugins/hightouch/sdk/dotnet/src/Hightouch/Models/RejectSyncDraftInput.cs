using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record RejectSyncDraftInput
{
    /// <summary>
    /// Identifies the reviewer in the caller's own approval system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public DraftReviewMetadataInput? Metadata { get; init; }
}
