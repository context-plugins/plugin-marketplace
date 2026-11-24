using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record FiltersLushaSignalsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public IncludeLushaSignalsApi? Include { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
