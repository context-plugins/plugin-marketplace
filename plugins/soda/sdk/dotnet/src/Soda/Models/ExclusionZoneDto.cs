using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record ExclusionZoneDto
{
    [JsonPropertyName("lowerLimit")]
    public required double LowerLimit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("singleValue")]
    public bool? SingleValue { get; init; }

    [JsonPropertyName("upperLimit")]
    public required double UpperLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
