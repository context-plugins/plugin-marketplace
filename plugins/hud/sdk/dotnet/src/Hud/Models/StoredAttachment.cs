using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// One attachment as persisted in the owning entity's JSONB list.
/// <para>
/// ``upload_url`` is the staged upload locator the uploader attached. The
/// archive worker copies it under the entity's own prefix and records the
/// outcome: ``status='archived'`` with ``storage_url``/``size``, or
/// ``status='failed'`` with ``error``.
/// </para>
/// </summary>
public record StoredAttachment
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("upload_url")]
    public required string UploadUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public Size? Size { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    public ContentType? ContentType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusHudPlatformTasksApi? Status { get; init; } = StatusHudPlatformTasksApi.Staged;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("storage_url")]
    public StorageUrl? StorageUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived_at")]
    public ArchivedAt? ArchivedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
