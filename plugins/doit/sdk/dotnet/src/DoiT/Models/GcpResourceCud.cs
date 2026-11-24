using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// GCP resource-based Committed Use Discount (vCPU / memory). Mirrors the stored provider
/// document verbatim (raw values, e.g. <c>state</c>/<c>status</c> "ACTIVE", <c>plan</c> "TWELVE_MONTH").
/// </summary>
public record GcpResourceCud
{
    /// <summary>
    /// <c>true</c> if the CUD is configured to renew automatically at the end of its term.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoRenew")]
    public bool? AutoRenew { get; init; }

    /// <summary>
    /// GCP project number billed for this CUD's charges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingProjectNumber")]
    public string? BillingProjectNumber { get; init; }

    /// <summary>
    /// Resource-based CUD ID (provider-assigned).
    /// </summary>
    [JsonPropertyName("commitmentNumericId")]
    public required string CommitmentNumericId { get; init; }

    /// <summary>
    /// When the CUD was created. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Latest date by which this CUD is eligible for a custom-term exchange. Null when not eligible.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customTermEligibleUntil")]
    public DateTimeOffset? CustomTermEligibleUntil { get; init; }

    /// <summary>
    /// When the CUD term ends. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// Timestamp of the BigQuery CUD export row this item was read from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportDate")]
    public DateTimeOffset? ExportDate { get; init; }

    /// <summary>
    /// Machine family this CUD's reserved resources apply to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hardwareScope")]
    public string? HardwareScope { get; init; }

    /// <summary>
    /// GCP project ID hosting the reserved resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostProjectId")]
    public string? HostProjectId { get; init; }

    /// <summary>
    /// Raw provider inventory state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryState")]
    public string? InventoryState { get; init; }

    /// <summary>
    /// Fraction (0–1) of vCPU usage covered by this CUD in the last full calendar month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthCPUCoverage")]
    public double? LastMonthCpuCoverage { get; init; }

    /// <summary>
    /// Realized vCPU savings in the last full calendar month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthCPUSavings")]
    public double? LastMonthCpuSavings { get; init; }

    /// <summary>
    /// Fraction (0–1) of this CUD's reserved vCPUs actually used in the last full calendar month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthCPUUtilization")]
    public double? LastMonthCpuUtilization { get; init; }

    /// <summary>
    /// Fraction (0–1) of memory usage covered by this CUD in the last full calendar month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthMemoryCoverage")]
    public double? LastMonthMemoryCoverage { get; init; }

    /// <summary>
    /// Realized memory savings in the last full calendar month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthMemorySavings")]
    public double? LastMonthMemorySavings { get; init; }

    /// <summary>
    /// Fraction (0–1) of this CUD's reserved memory actually used in the last full calendar month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthMemoryUtilization")]
    public double? LastMonthMemoryUtilization { get; init; }

    /// <summary>
    /// Provider commitment display name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// GCP organization ID that owns the host project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizationId")]
    public string? OrganizationId { get; init; }

    /// <summary>
    /// Raw provider commitment plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan")]
    public string? Plan { get; init; }

    /// <summary>
    /// GCP region the reserved resources are scoped to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// Resources reserved by this CUD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reservedResources")]
    public IReadOnlyList<ReservedResource>? ReservedResources { get; init; }

    /// <summary>
    /// When the CUD term started. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// Raw provider commitment state.
    /// </summary>
    [JsonPropertyName("state")]
    public required string State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
