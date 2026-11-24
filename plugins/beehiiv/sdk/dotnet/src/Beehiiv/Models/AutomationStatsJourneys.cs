using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Journey counts for an automation.
/// </summary>
public record AutomationStatsJourneys
{
    /// <summary>
    /// Number of journeys currently in progress
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("running")]
    public int? Running { get; init; } = 0;

    /// <summary>
    /// Number of completed journeys
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed")]
    public int? Completed { get; init; } = 0;

    /// <summary>
    /// Total number of journeys
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public int? Total { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
