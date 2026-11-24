using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record EpisodeDetail
{
    [JsonPropertyName("entities")]
    public required IReadOnlyList<EntityRef> Entities { get; init; }

    [JsonPropertyName("episode")]
    public required EpisodeFull Episode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("podcast")]
    public PodcastRef2? Podcast { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcript")]
    public Transcript? Transcript { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
