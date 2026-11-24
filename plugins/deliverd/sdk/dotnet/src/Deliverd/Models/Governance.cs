using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

/// <summary>
/// Govern it from the start (Compliance Mode, Business and Enterprise): the AI system, purpose, owners, risk, data and oversight
/// </summary>
public record Governance
{
    /// <summary>
    /// The AI system doing the work, from the register (register_ai_system)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aiSystemId")]
    public Guid? AiSystemId { get; init; }

    /// <summary>
    /// What the AI is used for in this work, in a sentence a reviewer can check against
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purpose")]
    [MaxLength(4000)]
    public string? Purpose { get; init; }

    /// <summary>
    /// The person accountable for the outcome
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessOwner")]
    [MaxLength(320)]
    public string? BusinessOwner { get; init; }

    /// <summary>
    /// The person accountable for how it is built and run
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("technicalOwner")]
    [MaxLength(320)]
    public string? TechnicalOwner { get; init; }

    /// <summary>
    /// low, medium, high or critical. Never lower than the AI system's own
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("risk")]
    public RiskDeliverdDevTasksApi? Risk { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataClassification")]
    public DataClassification? DataClassification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personalData")]
    public bool? PersonalData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sensitiveData")]
    public bool? SensitiveData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerFacing")]
    public bool? CustomerFacing { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productionUse")]
    public bool? ProductionUse { get; init; }

    /// <summary>
    /// Supports a critical or important function (DORA Art. 3(22)), as the organisation classifies it. null until classified, when production use stands in. Only a person lowers it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("criticalFunction")]
    public bool? CriticalFunction { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autonomy")]
    public Autonomy? Autonomy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decisionImpact")]
    public DecisionImpactDeliverdDevGovernanceApi? DecisionImpact { get; init; }

    /// <summary>
    /// How people oversee the AI's work
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oversight")]
    public OversightDeliverdDevTasksApi? Oversight { get; init; }

    /// <summary>
    /// Where the work or its effects apply, e.g. EU, UK, US-CA
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jurisdictions")]
    [MaxLength(30)]
    public IReadOnlyList<string>? Jurisdictions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
