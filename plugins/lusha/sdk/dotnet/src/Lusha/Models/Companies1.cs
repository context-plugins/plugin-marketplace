using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Companies1
{
    [JsonPropertyName("include")]
    public required V3CompanyProspectingFilters Include { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude")]
    public V3CompanyProspectingFilters? Exclude { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
