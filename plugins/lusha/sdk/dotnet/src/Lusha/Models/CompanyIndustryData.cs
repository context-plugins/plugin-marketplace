using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyIndustryData
{
    [JsonPropertyName("mainIndustry")]
    public required string MainIndustry { get; init; }

    [JsonPropertyName("subIndustry")]
    public required string SubIndustry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
