using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Payload for creating or updating a contract template.
/// </summary>
public record ContractTemplateInput
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("platform")]
    public required string Platform { get; init; }

    /// <summary>
    /// Which preset the template started from. Optional — an omitted or blank value is recorded as "blank".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("structure")]
    public string? Structure { get; init; }

    [JsonPropertyName("eligibleFrom")]
    public required DateTimeOffset EligibleFrom { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eligibleTo")]
    public DateTimeOffset? EligibleTo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingRules")]
    public IReadOnlyList<ContractTemplateBillingRule>? BillingRules { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priceBooks")]
    public IReadOnlyList<ContractTemplatePriceBook>? PriceBooks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customLineItems")]
    public IReadOnlyList<object>? CustomLineItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
