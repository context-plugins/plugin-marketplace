using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record EmployeesBySeniority
{
    /// <summary>
    /// Seniority level
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seniority")]
    public string? Seniority { get; init; }

    /// <summary>
    /// Number of employees at this seniority level
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public int? Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
