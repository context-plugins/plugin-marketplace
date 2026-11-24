using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// Filter companies by LinkedIn-reported employee count.
/// Both <c>min</c> and <c>max</c> are optional — provide either or both.
/// </summary>
public record EmployeesInLinkedInFilter
{
    /// <summary>
    /// Minimum employee count (inclusive)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("min")]
    public long? Min { get; init; }

    /// <summary>
    /// Maximum employee count (inclusive)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max")]
    public long? Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
