using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Laddering projection for one product-line and region scope.
/// </summary>
public record GcpPlannedPurchase
{
    /// <summary>
    /// Region token for this projection scope (<c>lower_snake_case</c>, for example <c>us_east1</c>). <c>compute</c> projections use the cross-region scope <c>global</c>; <c>cloud_sql</c> projections use concrete regions.
    /// </summary>
    [JsonPropertyName("region")]
    [RegularExpression("^(global|[a-z]+(_[a-z0-9]+)+)$")]
    public required string Region { get; init; }

    /// <summary>
    /// Projection lifecycle state. When the stored document has no <c>status</c>, the server returns <c>valid</c>.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1DoiTPerfectScaleForCommitmentsGcpApi Status { get; init; }

    /// <summary>
    /// Customer commitment approval state for this scope. Absent or unrecognized stored values (including <c>REJECTED</c>) are returned as <c>pending_approval</c>, except on autonomous automation-mode lines, where they are returned as <c>approved</c> since no customer approval is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseApprovalStatus")]
    public PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi? PurchaseApprovalStatus { get; init; }

    /// <summary>
    /// Customer-visible pause reason, when purchases are paused.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pauseNote")]
    public string? PauseNote { get; init; }

    /// <summary>
    /// <c>true</c> when the projection as a whole requires customer approval before the planner
    /// stores a purchase plan: the target <c>finalCommitment</c> exceeds the approved ceiling,
    /// and/or <c>purchaseApprovalStatus</c> is not <c>approved</c>. Distinct from step-level
    /// <c>steps[].requiresApproval</c>, which flags individual ladder rows that exceed the ceiling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requiresApproval")]
    public bool? RequiresApproval { get; init; }

    /// <summary>
    /// <c>true</c> when week-over-week eligible spend dropped beyond the allowed threshold.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wowViolation")]
    public bool? WowViolation { get; init; }

    /// <summary>
    /// Coverage target policy used to generate this projection (built-in or customer-defined). Omitted when the projection predates policy tracking.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile")]
    public string? Profile { get; init; }

    /// <summary>
    /// Commitment term used for projected purchases.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("term")]
    public CommitmentTerm? Term { get; init; }

    /// <summary>
    /// Target hourly commitment at the end of the laddering cycle. Currency is <c>USD</c> in v1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("finalCommitment")]
    public Money? FinalCommitment { get; init; }

    /// <summary>
    /// Number of ladder steps remaining to reach the target commitment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("weeksToTarget")]
    public int? WeeksToTarget { get; init; }

    /// <summary>
    /// First day of the planning cycle for this projection. Null when not set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("planningCycleStartDate")]
    public DateTimeOffset? PlanningCycleStartDate { get; init; }

    /// <summary>
    /// Last day of the planning cycle for this projection. Null when not set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("planningCycleEndDate")]
    public DateTimeOffset? PlanningCycleEndDate { get; init; }

    /// <summary>
    /// Total estimated savings from the underlying recommendation. Currency is <c>USD</c> in v1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedSavings")]
    public Money? EstimatedSavings { get; init; }

    /// <summary>
    /// Weekly ladder steps from the projection output. Omitted when the stored document has
    /// no <c>output</c> section.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("steps")]
    public IReadOnlyList<GcpPurchasePlanStep>? Steps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
