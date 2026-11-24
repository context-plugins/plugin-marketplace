using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PostsAggregateStatsResponse
{
    [JsonPropertyName("data")]
    public required PostsAggregateStatsResponseStats Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
