using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.AnyOf;

namespace AlphAi.Models;

public record BriefSignalDto
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentiment")]
    public Sentiment1? Sentiment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
