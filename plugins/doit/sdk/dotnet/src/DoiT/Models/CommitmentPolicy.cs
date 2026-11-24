using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// A commitment-laddering policy, either built-in or defined by the tenant. Percentages are
/// <c>1</c>–<c>100</c>, as entered in the DoiT Console, not the 0–1 fractions used by the recommendation and
/// inventory coverage fields.
/// </summary>
public record CommitmentPolicy
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
