using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// The plan details, or null if the customer has no active plan
/// </summary>
public record PlansCurrentGetResponsesContentApplicationJsonSchemaPlan
{
    /// <summary>
    /// The unique identifier of the plan
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The name of the plan
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The description of the plan
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The type of plan
    /// </summary>
    [JsonPropertyName("type")]
    public required PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType Type { get; init; }

    /// <summary>
    /// The pricing configuration for a plan. Uses the same PricePoints structure as product pricing.
    /// </summary>
    [JsonPropertyName("pricing")]
    public required PlanPricing Pricing { get; init; }

    /// <summary>
    /// The plan group ID this plan belongs to
    /// </summary>
    [JsonPropertyName("planGroupId")]
    public required Guid PlanGroupId { get; init; }

    /// <summary>
    /// The ID of the next plan in the sequence
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPlanId")]
    public Guid? NextPlanId { get; init; }

    /// <summary>
    /// The ID of the previous plan in the sequence
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prevPlanId")]
    public Guid? PrevPlanId { get; init; }

    /// <summary>
    /// The features (product-attribute pairs) included in this plan with usage and limits
    /// </summary>
    [JsonPropertyName("features")]
    public required IReadOnlyList<PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItems> Features { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
