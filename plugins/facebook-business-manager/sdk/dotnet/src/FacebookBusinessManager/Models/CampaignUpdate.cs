using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Models;

public record CampaignUpdate
{
    /// <summary>
    /// Updated campaign name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Updated daily budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_budget")]
    public string? DailyBudget { get; init; }

    /// <summary>
    /// Updated lifetime budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lifetime_budget")]
    public string? LifetimeBudget { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
