using System.Text.Json.Serialization;
using Rendex.Core.Models;

namespace Rendex.Models;

/// <summary>
/// The "what changed" enrichment from this watch's most recent CHANGED run — returned on GET /v1/watches and GET /v1/watches/{id} so a polling "changed" trigger gets the detail inline (no follow-up call to /:id/runs). Null when the watch has never changed.
/// </summary>
public record LastChange
{
    /// <summary>
    /// One-sentence "what changed" summary (templated by default; AI-written when a Pro+ watch opted in)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aiSummary")]
    public string? AiSummary { get; init; }

    /// <summary>
    /// Parsed text diff: { added, removed, summary }. Null for a visual-only change
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("textDiff")]
    public object? TextDiff { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
