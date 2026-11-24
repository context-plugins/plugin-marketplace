using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record RangeModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coverage")]
    public Coverage? Coverage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("min")]
    public int? Min { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max")]
    public int? Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
