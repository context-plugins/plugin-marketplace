using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1AiSystemsRequest1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(200, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// OpenAI, Anthropic, an internal team…
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    [MaxLength(120)]
    public string? Provider { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    [MaxLength(200)]
    public string? Model { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modelVersion")]
    [MaxLength(120)]
    public string? ModelVersion { get; init; }

    /// <summary>
    /// A digest of the prompt it runs with (sha256:…, a commit, a version tag), never the prompt
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promptHash")]
    [StringLength(200, MinimumLength = 1)]
    public string? PromptHash { get; init; }

    /// <summary>
    /// A digest of its guardrail configuration, never the configuration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("guardrailsHash")]
    [StringLength(200, MinimumLength = 1)]
    public string? GuardrailsHash { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purpose")]
    [MaxLength(4000)]
    public string? Purpose { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessOwner")]
    [MaxLength(320)]
    public string? BusinessOwner { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("technicalOwner")]
    [MaxLength(320)]
    public string? TechnicalOwner { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public EnvironmentEnum? Environment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("risk")]
    public Risk? Risk { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oversight")]
    public Oversight? Oversight { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataClassification")]
    public DataClassification? DataClassification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personalData")]
    public bool? PersonalData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerFacing")]
    public bool? CustomerFacing { get; init; }

    /// <summary>
    /// The contract in the ICT third-party register the system runs under (GET /api/v1/governance/ict-register)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ictArrangementId")]
    public Guid? IctArrangementId { get; init; }

    /// <summary>
    /// How the use came to the register: built in-house, a supplier's AI, a feature in a service, a proof of concept, or found in use
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entryType")]
    public EntryType? EntryType { get; init; }

    /// <summary>
    /// Who uses it: one person for their work, a team or function, or the whole organisation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useScope")]
    public UseScope? UseScope { get; init; }

    /// <summary>
    /// Who and how many, in a phrase: 'the 40 claims handlers'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userPopulation")]
    [MaxLength(500)]
    public string? UserPopulation { get; init; }

    /// <summary>
    /// What its output feeds into
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decisionImpact")]
    public DecisionImpact? DecisionImpact { get; init; }

    /// <summary>
    /// Who its output reaches, furthest first
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalReach")]
    public ExternalReach? ExternalReach { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildOrBuy")]
    public BuildOrBuy? BuildOrBuy { get; init; }

    /// <summary>
    /// The supplier, when bought
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supplier")]
    [MaxLength(200)]
    public string? Supplier { get; init; }

    /// <summary>
    /// The legal entities that use it or are affected by it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entities")]
    [MaxLength(50)]
    public IReadOnlyList<string>? Entities { get; init; }

    /// <summary>
    /// Why the use needs AI at all
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("needStatement")]
    [MaxLength(4000)]
    public string? NeedStatement { get; init; }

    /// <summary>
    /// How the work is, or would be, done without AI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nonAiAlternative")]
    [MaxLength(4000)]
    public string? NonAiAlternative { get; init; }

    /// <summary>
    /// What it is expected to give
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedBenefit")]
    [MaxLength(4000)]
    public string? ExpectedBenefit { get; init; }

    /// <summary>
    /// Yearly cost, with costCurrency
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annualCost")]
    [Minimum(0.0)]
    public double? AnnualCost { get; init; }

    /// <summary>
    /// ISO 4217 code, such as EUR
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("costCurrency")]
    [RegularExpression("^[A-Z]{3}$")]
    public string? CostCurrency { get; init; }

    /// <summary>
    /// Triage: the record already in the register that this one repeats
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicateOf")]
    public Guid? DuplicateOf { get; init; }

    /// <summary>
    /// Not accepted: a record's status follows its lifecycle. Take a step with its transitions instead
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
