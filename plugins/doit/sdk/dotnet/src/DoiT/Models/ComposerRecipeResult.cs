using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// One result of a Composer recipe — a finding on one affected resource.
/// </summary>
public record ComposerRecipeResult
{
    /// <summary>
    /// Result ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// ID of the recipe the result belongs to. Equal to the <c>recipeId</c> path parameter.
    /// </summary>
    [JsonPropertyName("ruleId")]
    public required long RuleId { get; init; }

    /// <summary>
    /// Identifier of the affected resource, as stored by Composer.
    /// </summary>
    [JsonPropertyName("issuedResourceId")]
    public required string IssuedResourceId { get; init; }

    /// <summary>
    /// Canonical cloud-provider identifier of the affected resource.
    /// - AWS: the resource's ARN when one is available, otherwise the stored identifier (for example, an EC2 instance ID).
    /// - Google Cloud: the API relative resource name (for example, <c>projects/my-project/zones/us-central1-a/instances/vm-1</c>), or the bucket name for Cloud Storage; otherwise the stored identifier.
    /// - Other providers: the provider-native identifier.
    /// <para>
    /// <c>null</c> when no identifier is stored or it could not be resolved; resolving it never fails the request.
    /// </para>
    /// </summary>
    [JsonPropertyName("providerIdentifier")]
    public required string? ProviderIdentifier { get; init; }

    /// <summary>
    /// Cloud-provider tags on the affected resource, as key/value pairs. An empty object means the resource has no tags. <c>null</c> means the tags could not be resolved; resolving them never fails the request.
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyDictionary<string, string>? Tags { get; init; }

    /// <summary>
    /// Name of the affected resource.
    /// </summary>
    [JsonPropertyName("issuedResourceName")]
    public required string IssuedResourceName { get; init; }

    /// <summary>
    /// Cloud account the affected resource belongs to (for example, an AWS account ID or a Google Cloud project ID).
    /// </summary>
    [JsonPropertyName("accountId")]
    public required string AccountId { get; init; }

    /// <summary>
    /// Cloud region of the affected resource. Absent for global resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// Cloud provider or platform, using the Console's provider names.
    /// </summary>
    [JsonPropertyName("provider")]
    public required ComposerProvider Provider { get; init; }

    /// <summary>
    /// Type of the affected resource. Absent when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceClass")]
    public string? ResourceClass { get; init; }

    /// <summary>
    /// When the result was first detected (RFC 3339, UTC).
    /// </summary>
    [JsonPropertyName("detectionTime")]
    public required DateTimeOffset DetectionTime { get; init; }

    /// <summary>
    /// When the result was resolved (RFC 3339, UTC). Absent while unresolved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolvedTime")]
    public DateTimeOffset? ResolvedTime { get; init; }

    /// <summary>
    /// Whether the result is resolved.
    /// </summary>
    [JsonPropertyName("solved")]
    public required bool Solved { get; init; }

    /// <summary>
    /// Whether the result is currently snoozed. Present only when <c>true</c>; absent means not snoozed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("snoozed")]
    public bool? Snoozed { get; init; }

    /// <summary>
    /// Whether the result's account was scanned recently. It does not say whether the result is resolved or snoozed; use <c>solved</c> and <c>snoozed</c> for that, or the <c>status</c> filter.
    /// </summary>
    [JsonPropertyName("isActive")]
    public required bool IsActive { get; init; }

    /// <summary>
    /// ID of the most recent Composer scan that reported this result. Absent when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastFlowId")]
    public string? LastFlowId { get; init; }

    /// <summary>
    /// ID of the Composer scan that first reported this result. Absent when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstFlowId")]
    public string? FirstFlowId { get; init; }

    /// <summary>
    /// Potential cost savings — the daily amount in US dollars you would stop paying by acting on this result. The Console <b>Cost savings</b> column is this daily US-dollar amount × 365, converted to your organization's currency. Absent when not estimated, and always absent on resolved results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("costEstimationPotentialSavings")]
    public double? CostEstimationPotentialSavings { get; init; }

    /// <summary>
    /// Cost avoidance — the daily amount in US dollars of a future charge (for example, extended-support fees) you prevent by acting on this result in time. The Console <b>Cost avoidance</b> column is this daily US-dollar amount × 365, converted to your organization's currency. Absent when not estimated, and always absent on resolved results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("costEstimationPotentialIncreasedCosts")]
    public double? CostEstimationPotentialIncreasedCosts { get; init; }

    /// <summary>
    /// Freed commitments — the daily amount in US dollars of commitment coverage (Savings Plans, Reserved Instances or CUDs) that acting on this result frees up for other usage. The Console <b>Freed commitments</b> column is this daily US-dollar amount × 365, converted to your organization's currency. Absent when not estimated, and always absent on resolved results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("costEstimationPotentialFreedCommitments")]
    public double? CostEstimationPotentialFreedCommitments { get; init; }

    /// <summary>
    /// Avoidable commitments — the daily amount in US dollars of extra commitment or overlapping cost you avoid by timing the action, for example to a Reserved Instance's expiry. The Console <b>Avoidable commitments</b> column is this daily US-dollar amount × 365, converted to your organization's currency. Absent when not estimated, and always absent on resolved results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("costEstimationPotentialIncreasedCommitmentsRequired")]
    public double? CostEstimationPotentialIncreasedCommitmentsRequired { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
