using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

/// <summary>
/// Response containing the trigger ID
/// </summary>
public record V1TriggerCampaignResponse
{
    /// <summary>
    /// Unique identifier for this campaign trigger
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trigger_id")]
    public string? TriggerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
