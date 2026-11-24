using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Optional statistics for an automation. Retrievable by including <c>expand: [stats]</c> in the automation request.
/// </summary>
public record AutomationStats
{
    /// <summary>
    /// Journey counts for the automation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("journeys")]
    public AutomationStatsJourneys2? Journeys { get; init; }

    /// <summary>
    /// Aggregate email engagement statistics
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public AutomationStatsEmail2? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
