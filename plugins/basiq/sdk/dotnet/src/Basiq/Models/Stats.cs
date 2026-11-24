using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// InstitutionPerformanceStats response type for institution performance stats
/// </summary>
public record Stats
{
    /// <summary>
    /// AverageDurationMs average connector duration in milliseconds per segments.
    /// When durations are not known for institution this field will be <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("averageDurationMs")]
    public AverageDurationMs? AverageDurationMs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
