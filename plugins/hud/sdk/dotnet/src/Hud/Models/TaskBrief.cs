using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// The persisted shape of ``task_versions.brief``.
/// <para>
/// Drafts are no longer authored; the brief-archive worker is the only
/// remaining writer.
/// </para>
/// </summary>
public record TaskBrief
{
    [JsonPropertyName("prompt")]
    public required string Prompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachments")]
    public IReadOnlyList<StoredAttachment>? Attachments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
