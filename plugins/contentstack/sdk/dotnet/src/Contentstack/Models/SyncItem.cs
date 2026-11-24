using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Models.Enums;

namespace Contentstack.Models;

/// <summary>
/// A single item in a sync response representing a content change event.
/// </summary>
public record SyncItem
{
    /// <summary>
    /// The type of sync event. Possible values: entry_published, entry_unpublished, entry_deleted, asset_published, asset_unpublished, asset_deleted, content_type_deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeContentstackContentDeliverySynchronizationApi? Type { get; init; }

    /// <summary>
    /// The content data associated with this sync event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public object? Data { get; init; }

    /// <summary>
    /// The UID of the content type for entry-related events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type_uid")]
    public string? ContentTypeUid { get; init; }

    /// <summary>
    /// The locale of the content for locale-specific events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locale")]
    public string? Locale { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
