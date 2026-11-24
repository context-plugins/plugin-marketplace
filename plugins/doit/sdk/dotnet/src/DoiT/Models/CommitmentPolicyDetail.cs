using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

public record CommitmentPolicyDetail
{
    /// <summary>
    /// Policy identifier. Built-in policies use the fixed ids <c>conservative</c>, <c>balanced</c> and <c>max_savings</c>; custom policies have an opaque id.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Display name. Built-in names are fixed; custom names are chosen by the tenant.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// <c>true</c> for the three immutable built-in policies, <c>false</c> for tenant-defined policies.
    /// </summary>
    [JsonPropertyName("isBuiltIn")]
    public required bool IsBuiltIn { get; init; }

    /// <summary>
    /// Share of the optimal commitment the engine aims to purchase, as a percentage.
    /// </summary>
    [JsonPropertyName("targetCoverage")]
    [Minimum(1.0)]
    [Maximum(100.0)]
    public required double TargetCoverage { get; init; }

    /// <summary>
    /// Days of historical usage analyzed to build the recommendation baseline.
    /// </summary>
    [JsonPropertyName("lookbackDays")]
    [Minimum(1)]
    public required int LookbackDays { get; init; }

    /// <summary>
    /// Size of each incremental laddering step, as a percentage of the target commitment.
    /// </summary>
    [JsonPropertyName("ladderStepPercent")]
    [Minimum(1.0)]
    [Maximum(100.0)]
    public required double LadderStepPercent { get; init; }

    /// <summary>
    /// Days between consecutive laddering steps.
    /// </summary>
    [JsonPropertyName("ladderIntervalDays")]
    [Minimum(1)]
    public required int LadderIntervalDays { get; init; }

    /// <summary>
    /// Share of the target commitment purchased in the first (immediate) step, as a percentage.
    /// </summary>
    [JsonPropertyName("bootstrapPercent")]
    [Minimum(1.0)]
    [Maximum(100.0)]
    public required double BootstrapPercent { get; init; }

    /// <summary>
    /// When the policy was created, RFC 3339 UTC. <c>null</c> if unknown.
    /// </summary>
    [JsonPropertyName("createdTime")]
    public required DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// When the policy was last written, RFC 3339 UTC. For custom policies this is the last edit; for built-in policies it also advances when DoiT re-publishes the catalog, even if the parameters did not change. <c>null</c> if unknown.
    /// </summary>
    [JsonPropertyName("updatedTime")]
    public required DateTimeOffset? UpdatedTime { get; init; }

    /// <summary>
    /// Scopes explicitly assigned to this policy across AWS and GCP, sorted by <c>cloud</c>, <c>accountId</c>, <c>service</c>, <c>region</c>. Empty when the policy is not assigned anywhere.
    /// </summary>
    [JsonPropertyName("assignments")]
    public required IReadOnlyList<CommitmentPolicyAssignment> Assignments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
