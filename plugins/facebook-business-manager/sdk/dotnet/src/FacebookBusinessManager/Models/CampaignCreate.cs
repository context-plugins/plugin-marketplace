using System.Collections.Generic;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Models;

public record CampaignCreate
{
    /// <summary>
    /// The name of the campaign
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The campaign objective
    /// </summary>
    [JsonPropertyName("objective")]
    public required Objective Objective { get; init; }

    /// <summary>
    /// The initial status of the campaign
    /// </summary>
    [JsonPropertyName("status")]
    public required Status2 Status { get; init; }

    /// <summary>
    /// Required special ad categories or empty array if none apply
    /// </summary>
    [JsonPropertyName("special_ad_categories")]
    public required IReadOnlyList<string> SpecialAdCategories { get; init; }

    /// <summary>
    /// Daily budget in smallest currency unit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_budget")]
    public string? DailyBudget { get; init; }

    /// <summary>
    /// Lifetime budget in smallest currency unit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lifetime_budget")]
    public string? LifetimeBudget { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buying_type")]
    public BuyingType1? BuyingType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
