using System;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

public record AttachmentPaymentHistoryFull
{
    /// <summary>
    /// Unique name / number to identify the specific customer account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unique_account_identifier")]
    public string? UniqueAccountIdentifier { get; init; }

    /// <summary>
    /// One of - card / direct banking / COD (cash) / other
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_option")]
    public PaymentOption? PaymentOption { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number_paid_purchases")]
    public double? NumberPaidPurchases { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_amount_paid_purchases")]
    public double? TotalAmountPaidPurchases { get; init; }

    /// <summary>
    /// ISO 8601 date e.g. 2018-10-17
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_of_last_paid_purchase")]
    public DateTimeOffset? DateOfLastPaidPurchase { get; init; }

    /// <summary>
    /// ISO 8601 date e.g. 2018-10-17
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_of_first_paid_purchase")]
    public DateTimeOffset? DateOfFirstPaidPurchase { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count_paid_purchases_last_month")]
    public double? CountPaidPurchasesLastMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_paid_purchases_last_month")]
    public double? AmountPaidPurchasesLastMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_paid_amount_for_1purchase")]
    public double? MaxPaidAmountFor1Purchase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
