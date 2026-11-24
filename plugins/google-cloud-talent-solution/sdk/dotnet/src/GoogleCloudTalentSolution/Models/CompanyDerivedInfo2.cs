using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Output only. Derived details about the company.
/// </summary>
public record CompanyDerivedInfo2
{
    /// <summary>
    /// A structured headquarters location of the company, resolved from Company.headquarters_address if provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headquartersLocation")]
    public Location3? HeadquartersLocation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
