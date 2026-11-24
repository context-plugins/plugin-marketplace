using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The synced item for the story.
/// </summary>
public record SyncedItem
{
    /// <summary>
    /// The id used to reference an external entity.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string ExternalId { get; init; }

    /// <summary>
    /// The url to the external entity.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }
}
