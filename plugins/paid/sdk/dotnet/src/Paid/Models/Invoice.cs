using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record Invoice
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayNumber")]
    public string? DisplayNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderId")]
    public string? OrderId { get; init; }

    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonPropertyName("status")]
    public required InvoiceStatus Status { get; init; }

    [JsonPropertyName("paymentStatus")]
    public required InvoicePaymentStatus PaymentStatus { get; init; }

    [JsonPropertyName("source")]
    public required InvoiceSource Source { get; init; }

    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    [JsonPropertyName("issueDate")]
    public required DateTimeOffset IssueDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postedDate")]
    public DateTimeOffset? PostedDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueDate")]
    public DateTimeOffset? DueDate { get; init; }

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("taxAmount")]
    public required double TaxAmount { get; init; }

    [JsonPropertyName("taxRate")]
    public required double TaxRate { get; init; }

    [JsonPropertyName("taxStatus")]
    public required InvoiceTaxStatus TaxStatus { get; init; }

    [JsonPropertyName("invoiceTotalExcludingTax")]
    public required double InvoiceTotalExcludingTax { get; init; }

    [JsonPropertyName("invoiceTotal")]
    public required double InvoiceTotal { get; init; }

    [JsonPropertyName("amountDue")]
    public required double AmountDue { get; init; }

    [JsonPropertyName("amountPaid")]
    public required double AmountPaid { get; init; }

    [JsonPropertyName("amountRemaining")]
    public required double AmountRemaining { get; init; }

    [JsonPropertyName("creditNotesTotal")]
    public required double CreditNotesTotal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentLink")]
    public string? PaymentLink { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disputeLink")]
    public string? DisputeLink { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publicUrlToken")]
    public string? PublicUrlToken { get; init; }

    [JsonPropertyName("taxExempt")]
    public required bool TaxExempt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingContactId")]
    public string? BillingContactId { get; init; }

    /// <summary>
    /// Purchase order reference stamped on this invoice.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseOrderReference")]
    public string? PurchaseOrderReference { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
