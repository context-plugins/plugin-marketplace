using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record PodcastDetail
{
    [JsonPropertyName("podcast")]
    public required PodcastFull Podcast { get; init; }

    [JsonPropertyName("recent_episodes")]
    public required IReadOnlyList<EpisodeInPodcast> RecentEpisodes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
