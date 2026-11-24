using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record EmployeesByDepartment
{
    /// <summary>
    /// Department name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("department")]
    public string? Department { get; init; }

    /// <summary>
    /// Number of employees in this department
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public int? Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
