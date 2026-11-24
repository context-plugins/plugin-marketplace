using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record PersonAppearance
{
    [JsonPropertyName("episode_id")]
    public required long EpisodeId { get; init; }

    [JsonPropertyName("episode_title")]
    public required string EpisodeTitle { get; init; }

    [JsonPropertyName("podcast_title")]
    public required string PodcastTitle { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish_date")]
    public string? PublishDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
