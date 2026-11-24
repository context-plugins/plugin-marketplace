using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record ApproveSyncDraftInput
{
    /// <summary>
    /// The <c>draftVersion</c> from the draft the reviewer saw
    /// </summary>
    [JsonPropertyName("expectedDraftVersion")]
    public required string ExpectedDraftVersion { get; init; }

    /// <summary>
    /// The <c>resourceVersion</c> from the draft the reviewer saw
    /// </summary>
    [JsonPropertyName("expectedResourceVersion")]
    public required string ExpectedResourceVersion { get; init; }

    /// <summary>
    /// Identifies the reviewer in the caller's own approval system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public DraftReviewMetadataInput? Metadata { get; init; }
}
