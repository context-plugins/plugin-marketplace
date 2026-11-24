using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PodcastEpisodeGetResponse
{
    [JsonPropertyName("data")]
    public required PodcastEpisode Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
