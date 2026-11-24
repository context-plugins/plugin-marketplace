using System.Text.Json.Serialization;
using Leadspace.Core.Models;
using Leadspace.Models.Enums;

namespace Leadspace.Models;

public record MatchingConfidence
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("level")]
    public Level1? Level { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
