using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// A pending draft on a resource the sync depends on. Approving the sync draft
/// does not approve it.
/// </summary>
public record RelatedDraft
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("modelId")]
    public required string ModelId { get; init; }

    [JsonPropertyName("operation")]
    public required Operation2 Operation { get; init; }

    /// <summary>
    /// The state of a sync draft. New values may be added, so treat an unknown
    /// value as closed.
    /// </summary>
    [JsonPropertyName("status")]
    public required SyncDraftStatus Status { get; init; }
}
