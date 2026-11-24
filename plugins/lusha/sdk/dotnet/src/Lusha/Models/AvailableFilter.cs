using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record AvailableFilter
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filterType")]
    public string? FilterType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requiresQuery")]
    public bool? RequiresQuery { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
