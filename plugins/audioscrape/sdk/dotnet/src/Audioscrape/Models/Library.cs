using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record Library
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("curator")]
    public string? Curator { get; init; }

    [JsonPropertyName("dataset_count")]
    public required long DatasetCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("episode_count")]
    public required long EpisodeCount { get; init; }

    /// <summary>
    /// Whether the calling user is a member of this library.
    /// </summary>
    [JsonPropertyName("is_subscribed")]
    public required bool IsSubscribed { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Stable URL slug, e.g. <c>audioscrape</c>.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonPropertyName("subscriber_count")]
    public required long SubscriberCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
