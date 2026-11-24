using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Derived details about the company.
/// </summary>
public record CompanyDerivedInfo
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
