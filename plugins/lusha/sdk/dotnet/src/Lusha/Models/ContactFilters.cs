using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ContactFilters
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public Include1? Include { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
