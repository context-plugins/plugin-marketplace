using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Companies
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include")]
    public V3CompanyFilterCriteria? Include { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude")]
    public V3CompanyFilterCriteria? Exclude { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
