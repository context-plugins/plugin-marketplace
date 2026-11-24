using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

/// <summary>
/// Request to trigger a campaign
/// </summary>
public record V1TriggerCampaignRequest
{
    /// <summary>
    /// Target audience for the campaign
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audience")]
    public Audience? Audience { get; init; }

    /// <summary>
    /// Custom properties for personalization
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public object? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
