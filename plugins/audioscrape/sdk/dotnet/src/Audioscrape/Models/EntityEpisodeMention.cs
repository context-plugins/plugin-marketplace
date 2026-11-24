using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record EntityEpisodeMention
{
    [JsonPropertyName("episode_id")]
    public required long EpisodeId { get; init; }

    [JsonPropertyName("episode_title")]
    public required string EpisodeTitle { get; init; }

    [JsonPropertyName("mention_count")]
    public required long MentionCount { get; init; }

    [JsonPropertyName("podcast_title")]
    public required string PodcastTitle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
