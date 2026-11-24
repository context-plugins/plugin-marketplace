using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record Order1
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonPropertyName("billingCustomerId")]
    public required string? BillingCustomerId { get; init; }

    [JsonPropertyName("billingContactIds")]
    public required IReadOnlyList<string> BillingContactIds { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonPropertyName("endDate")]
    public required DateTimeOffset? EndDate { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    [JsonPropertyName("subscriptionTerms")]
    public required int? SubscriptionTerms { get; init; }

    [JsonPropertyName("billedAmountNoTax")]
    public required double BilledAmountNoTax { get; init; }

    [JsonPropertyName("billedTax")]
    public required double BilledTax { get; init; }

    [JsonPropertyName("estimatedTax")]
    public required double EstimatedTax { get; init; }

    [JsonPropertyName("orderAmount")]
    public required double OrderAmount { get; init; }

    [JsonPropertyName("pendingBillingAmount")]
    public required double PendingBillingAmount { get; init; }

    [JsonPropertyName("totalAmount")]
    public required double TotalAmount { get; init; }

    [JsonPropertyName("totalBilledAmount")]
    public required double TotalBilledAmount { get; init; }

    [JsonPropertyName("creationState")]
    public required OrderCreationState CreationState { get; init; }

    [JsonPropertyName("paymentTerms")]
    public required string? PaymentTerms { get; init; }

    [JsonPropertyName("number")]
    public required double Number { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonPropertyName("showPaymentLink")]
    public required bool? ShowPaymentLink { get; init; }

    [JsonPropertyName("showBankDetails")]
    public required bool? ShowBankDetails { get; init; }

    [JsonPropertyName("autoPostInvoices")]
    public required bool? AutoPostInvoices { get; init; }

    [JsonPropertyName("autoSendBillingEmails")]
    public required bool? AutoSendBillingEmails { get; init; }

    [JsonPropertyName("autoSendPaymentEmails")]
    public required bool? AutoSendPaymentEmails { get; init; }

    [JsonPropertyName("version")]
    public required int Version { get; init; }

    [JsonPropertyName("billingFrequencyOverridden")]
    public required bool BillingFrequencyOverridden { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyOverride")]
    public OrderBillingFrequencyOverride? BillingFrequencyOverride { get; init; }

    [JsonPropertyName("purchaseOrderReference")]
    public required string? PurchaseOrderReference { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
