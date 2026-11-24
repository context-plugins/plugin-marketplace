using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record Round
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coverage")]
    public Coverage? Coverage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("round")]
    public Round1? RoundValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
