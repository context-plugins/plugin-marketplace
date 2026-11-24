using System.Text.Json.Serialization;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// A unified-diff patch for one file in a workspace change.
/// <para>
/// Byte-identical to the legacy ``tool_call.result_data.file_diff`` patch shape
/// so the frontend's existing diff parsing/reconstruction ports unchanged.
/// ``patch`` may be a placeholder string for over-cap files when ``truncated``.
/// </para>
/// </summary>
public record FilePatch
{
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonPropertyName("status")]
    public required StatusHudPlatformQaAgentsApi Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("patch")]
    public string? Patch { get; init; } = "";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size_before")]
    public int? SizeBefore { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size_after")]
    public int? SizeAfter { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_hash_before")]
    public ContentHashBefore? ContentHashBefore { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_hash_after")]
    public ContentHashAfter? ContentHashAfter { get; init; }
}
