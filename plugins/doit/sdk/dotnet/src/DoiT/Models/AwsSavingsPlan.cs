using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record AwsSavingsPlan
{
    /// <summary>
    /// Savings Plan ID (AWS-assigned GUID).
    /// </summary>
    [JsonPropertyName("commitmentId")]
    public required string CommitmentId { get; init; }

    /// <summary>
    /// Full ARN (Amazon Resource Name) of the Savings Plan, when known. <c>null</c> when DoiT doesn’t have the ARN stored yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("savingsPlanArn")]
    public string? SavingsPlanArn { get; init; }

    /// <summary>
    /// Savings Plan type. Values match the AWS Savings Plans API in snake_case, plus <c>database</c>.
    /// </summary>
    [JsonPropertyName("savingsPlanType")]
    public required SavingsPlanType SavingsPlanType { get; init; }

    /// <summary>
    /// Savings Plan lifecycle state. Values match the AWS Savings Plans API in snake_case.
    /// </summary>
    [JsonPropertyName("state")]
    public required State State { get; init; }

    /// <summary>
    /// Upfront payment structure for this Savings Plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentOption")]
    public PaymentOption1? PaymentOption { get; init; }

    /// <summary>
    /// Commitment term length for this Savings Plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("termDuration")]
    public CommitmentTerm? TermDuration { get; init; }

    /// <summary>
    /// Hourly commitment amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commitment")]
    public Money? Commitment { get; init; }

    /// <summary>
    /// Upfront payment amount. Null or omitted when payment option is <c>no_upfront</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upfrontPaymentAmount")]
    public Money? UpfrontPaymentAmount { get; init; }

    /// <summary>
    /// Recurring (typically hourly or monthly) payment amount after any upfront.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recurringPaymentAmount")]
    public Money? RecurringPaymentAmount { get; init; }

    /// <summary>
    /// EC2 instance family for <c>ec2_instance</c> plans (for example, <c>m5</c>). Null for other plan types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ec2InstanceFamily")]
    public string? Ec2InstanceFamily { get; init; }

    /// <summary>
    /// AWS region for plans that are region-scoped (for example, <c>us-east-1</c>). Null when not applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// When the Savings Plan started or is scheduled to start. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// When the Savings Plan ends or ended. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// Utilization in the last full calendar month, as a fraction from 0 to 1. Null when not yet available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthUtilization")]
    public double? LastMonthUtilization { get; init; }

    /// <summary>
    /// Realized savings in the last full calendar month. Null if not yet available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthSavings")]
    public Money? LastMonthSavings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
