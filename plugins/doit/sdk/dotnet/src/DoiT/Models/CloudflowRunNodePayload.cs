using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// JSON a node consumed or produced, bounded in size. Null when the node records nothing of
/// that kind — normal for <c>input</c> on any non-action node.
/// </summary>
public record CloudflowRunNodePayload
{
    /// <summary>
    /// The recorded JSON, always an array. Sensitive values are replaced with a redaction
    /// marker.
    /// </summary>
    [JsonPropertyName("value")]
    public required IReadOnlyList<object> Value { get; init; }

    /// <summary>
    /// True when entries were dropped to fit the size cap.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("truncated")]
    public bool? Truncated { get; init; }

    /// <summary>
    /// Size of the untruncated payload in bytes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalBytes")]
    public int? TotalBytes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
