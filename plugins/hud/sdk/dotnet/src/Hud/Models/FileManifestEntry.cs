using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// One file in a workspace snapshot manifest: path + size + content hash.
/// <para>
/// The manifest carries identity, not content. The viewer derives unchanged
/// content from immutable build source and applies setup changes separately.
/// </para>
/// </summary>
public record FileManifestEntry
{
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public int? Size { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_hash")]
    public ContentHash? ContentHash { get; init; }
}
