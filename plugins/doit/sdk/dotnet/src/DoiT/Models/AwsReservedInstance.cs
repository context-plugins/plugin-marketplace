using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Reserved Instance item in the external inventory response. Money fields are wrapped <c>{amount, currency}</c> objects.
/// </summary>
public record AwsReservedInstance
{
    /// <summary>
    /// Reserved Instance ID (AWS-assigned).
    /// </summary>
    [JsonPropertyName("commitmentId")]
    public required string CommitmentId { get; init; }

    /// <summary>
    /// Full Amazon Resource Name (ARN) of the Reserved Instance, when known.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reservedInstanceArn")]
    public string? ReservedInstanceArn { get; init; }

    /// <summary>
    /// AWS account ID where the Reserved Instance exists.
    /// </summary>
    [JsonPropertyName("accountId")]
    public required string AccountId { get; init; }

    /// <summary>
    /// Reserved Instance state, tracking the AWS EC2 Reserved Instance API verbatim in external snake_case form. Differs from Savings Plan states by design. For example, the terminal state is <c>retired</c> here vs <c>expired</c> on Savings Plans.
    /// </summary>
    [JsonPropertyName("state")]
    public required State1 State { get; init; }

    /// <summary>
    /// EC2 instance type on which the RI can be used (for example, <c>m5.large</c>).
    /// </summary>
    [JsonPropertyName("instanceType")]
    public required string InstanceType { get; init; }

    /// <summary>
    /// Number of instances covered by this Reserved Instance. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceCount")]
    public long? InstanceCount { get; init; }

    /// <summary>
    /// Tenancy of the instance (for example, <c>default</c>, <c>dedicated</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceTenancy")]
    public string? InstanceTenancy { get; init; }

    /// <summary>
    /// Availability Zone when the RI is AZ-scoped. Null for region-scoped RIs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availabilityZone")]
    public string? AvailabilityZone { get; init; }

    /// <summary>
    /// AWS region of the Reserved Instance (for example, <c>us-east-1</c>). Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// Platform identifier from AWS (for example, Linux/UNIX). Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public string? Platform { get; init; }

    /// <summary>
    /// Product platform description from AWS inventory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Scope of the Reserved Instance (for example, <c>Availability Zone</c>, <c>Region</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public string? Scope { get; init; }

    /// <summary>
    /// RI offering class.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offeringClass")]
    public OfferingClass? OfferingClass { get; init; }

    /// <summary>
    /// RI offering type / payment option label from AWS (for example, <c>All Upfront</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offeringType")]
    public string? OfferingType { get; init; }

    /// <summary>
    /// Term inferred from the RI duration. Absent when it does not map cleanly to 1yr / 3yr.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("termDuration")]
    public CommitmentTerm? TermDuration { get; init; }

    /// <summary>
    /// RI duration in seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("durationSeconds")]
    public long? DurationSeconds { get; init; }

    /// <summary>
    /// When the Reserved Instance started. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// When the Reserved Instance ends or ended. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// ISO 4217 currency code (USD in practice).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyCode")]
    public string? CurrencyCode { get; init; }

    /// <summary>
    /// Purchase price of the Reserved Instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fixedPrice")]
    public Money? FixedPrice { get; init; }

    /// <summary>
    /// Usage price per hour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usagePrice")]
    public Money? UsagePrice { get; init; }

    /// <summary>
    /// Hourly recurring fee for the Reserved Instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hourlyRecurringFee")]
    public Money? HourlyRecurringFee { get; init; }

    /// <summary>
    /// Upfront fee paid for the Reserved Instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upfrontFee")]
    public Money? UpfrontFee { get; init; }

    /// <summary>
    /// Total asset value of the Reserved Instance over its term.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalAssetValue")]
    public Money? TotalAssetValue { get; init; }

    /// <summary>
    /// Average on-demand hourly rate used for savings comparisons.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("averageOnDemandHourlyRate")]
    public Money? AverageOnDemandHourlyRate { get; init; }

    /// <summary>
    /// Amortized recurring fee over the RI term.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amortizedRecurringFee")]
    public Money? AmortizedRecurringFee { get; init; }

    /// <summary>
    /// Amortized upfront fee over the RI term.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amortizedUpfrontFee")]
    public Money? AmortizedUpfrontFee { get; init; }

    /// <summary>
    /// Sum of amortized upfront and recurring fees.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalAmortizedFee")]
    public Money? TotalAmortizedFee { get; init; }

    /// <summary>
    /// Net savings from the Reserved Instance versus on-demand.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("netRiSavings")]
    public Money? NetRiSavings { get; init; }

    /// <summary>
    /// Realized savings from hours actually covered by the RI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("realizedSavings")]
    public Money? RealizedSavings { get; init; }

    /// <summary>
    /// Forgone savings from unused RI hours.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unrealizedSavings")]
    public Money? UnrealizedSavings { get; init; }

    /// <summary>
    /// Total potential savings if the RI were fully utilized.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalPotentialRiSavings")]
    public Money? TotalPotentialRiSavings { get; init; }

    /// <summary>
    /// On-demand cost equivalent of the RI hours that were used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onDemandCostOfRiHoursUsed")]
    public Money? OnDemandCostOfRiHoursUsed { get; init; }

    /// <summary>
    /// RI cost attributable to unused hours.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("riCostForUnusedHours")]
    public Money? RiCostForUnusedHours { get; init; }

    /// <summary>
    /// Total hours purchased for this RI in the reporting window. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchasedHours")]
    public long? PurchasedHours { get; init; }

    /// <summary>
    /// Total normalized units purchased. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchasedUnits")]
    public long? PurchasedUnits { get; init; }

    /// <summary>
    /// Hours actually used against the RI. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalActualHours")]
    public long? TotalActualHours { get; init; }

    /// <summary>
    /// Normalized units actually used. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalNormalizedUnits")]
    public long? TotalNormalizedUnits { get; init; }

    /// <summary>
    /// Purchased hours that were not used. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unusedHours")]
    public long? UnusedHours { get; init; }

    /// <summary>
    /// Purchased normalized units that were not used. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unusedNormalizedUnits")]
    public long? UnusedNormalizedUnits { get; init; }

    /// <summary>
    /// Cost Explorer reported utilization, as a fraction from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utilizationPercentage")]
    public double? UtilizationPercentage { get; init; }

    /// <summary>
    /// Utilization percentage based on normalized units (0–1). Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utilizationPercentageInUnits")]
    public double? UtilizationPercentageInUnits { get; init; }

    /// <summary>
    /// Month-to-date realized savings.
    /// </summary>
    [JsonPropertyName("mtdSavings")]
    public required Money MtdSavings { get; init; }

    /// <summary>
    /// Month-to-date utilization (0–1). Null when not yet available. A stored 0% is indistinguishable from unavailable and is returned as null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mtdUtilization")]
    public double? MtdUtilization { get; init; }

    /// <summary>
    /// Timestamp of the last successful inventory sync for this Reserved Instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Recurring charge schedule from AWS for this Reserved Instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringCharges")]
    public IReadOnlyList<AwsReservedInstanceRecurringCharge>? RecurringCharges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
