using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// A plan containing products and their attributes
/// </summary>
public record Plan
{
    /// <summary>
    /// The unique identifier of the plan
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The organization ID that owns this plan
    /// </summary>
    [JsonPropertyName("organizationId")]
    public required Guid OrganizationId { get; init; }

    /// <summary>
    /// The plan group ID this plan belongs to
    /// </summary>
    [JsonPropertyName("planGroupId")]
    public required Guid PlanGroupId { get; init; }

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
    /// The type of plan (flat for fixed pricing, usage for usage-based, credit for prepaid credits)
    /// </summary>
    [JsonPropertyName("type")]
    public required PlanType Type { get; init; }

    /// <summary>
    /// The pricing configuration for a plan. Uses the same PricePoints structure as product pricing.
    /// </summary>
    [JsonPropertyName("pricing")]
    public required PlanPricing Pricing { get; init; }

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
    /// When the plan was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// When the plan was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The products included in this plan
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("planProducts")]
    public IReadOnlyList<PlanPlanProductsItems>? PlanProducts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
