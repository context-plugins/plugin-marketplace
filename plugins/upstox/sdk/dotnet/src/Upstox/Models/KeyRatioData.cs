using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record KeyRatioData
{
    /// <summary>
    /// Name of the ratio
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Ratio value for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_value")]
    public string? CompanyValue { get; init; }

    /// <summary>
    /// Ratio value for the sector reference
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sector_value")]
    public string? SectorValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
