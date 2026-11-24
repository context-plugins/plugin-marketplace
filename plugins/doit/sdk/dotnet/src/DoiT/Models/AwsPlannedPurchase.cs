using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record AwsPlannedPurchase
{
    /// <summary>
    /// 12-digit account number of the AWS organization's management (payer) account.
    /// </summary>
    [JsonPropertyName("managementAccountId")]
    public required string ManagementAccountId { get; init; }

    /// <summary>
    /// Commitment type this projection belongs to (<c>compute</c> or <c>database</c>).
    /// </summary>
    [JsonPropertyName("service")]
    public required Service Service { get; init; }

    /// <summary>
    /// Projection lifecycle state. <c>expired</c> means the planning cycle has lapsed and a new projection should be triggered by the automated scheduler. When the stored document has no <c>status</c>, the server returns <c>valid</c>.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusDoiTPerfectScaleForCommitmentsAwsApi Status { get; init; }

    /// <summary>
    /// Approval state for purchases of this commitment type. Approve or pause on the Planned Purchases tab in the DoiT Console. Absent or unrecognized stored values are returned as <c>pending_approval</c>, except on autonomous automation-mode lines, where they are returned as <c>approved</c> since no customer approval is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseApprovalStatus")]
    public PurchaseApprovalStatus? PurchaseApprovalStatus { get; init; }

    /// <summary>
    /// Customer-visible pause reason when <c>purchaseApprovalStatus</c> is <c>paused</c>. Null when purchases are not paused.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pauseNote")]
    public string? PauseNote { get; init; }

    /// <summary>
    /// <c>true</c> when the projection as a whole requires customer approval before the planner stores a purchase plan: the target <c>finalCommitment</c> exceeds the approved ceiling, and/or <c>purchaseApprovalStatus</c> is not <c>approved</c>. Distinct from step-level <c>steps[].requiresApproval</c>, which flags individual ladder rows that exceed the ceiling.
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
    /// Payment structure for projected purchases. May be null when not set on the stored projection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentOption")]
    public PaymentOption3? PaymentOption { get; init; }

    /// <summary>
    /// Target hourly commitment at the end of the laddering cycle. Currency is <c>USD</c>.
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
    /// Total estimated savings from the underlying recommendation. Currency is <c>USD</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedSavings")]
    public Money? EstimatedSavings { get; init; }

    /// <summary>
    /// Weekly ladder steps from the projection output. Omitted when the stored document has no <c>output</c> section.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("steps")]
    public IReadOnlyList<AwsPurchasePlanStep>? Steps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
