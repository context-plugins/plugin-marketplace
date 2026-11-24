using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

/// <summary>
/// Conditions on the governance profile; every one given must hold
/// </summary>
public record AppliesWhen
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minRisk")]
    public MinRisk? MinRisk { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personalData")]
    public bool? PersonalData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerFacing")]
    public bool? CustomerFacing { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productionUse")]
    public bool? ProductionUse { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decisionImpact")]
    public IReadOnlyList<DecisionImpactDeliverdDevGovernanceApi>? DecisionImpact { get; init; }
}
