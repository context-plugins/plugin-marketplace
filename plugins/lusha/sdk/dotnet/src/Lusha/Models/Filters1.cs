using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Filters1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies")]
    public CompanyFilters? Companies { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
