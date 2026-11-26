using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Recurring bills read response.
/// </summary>
public record RecurringBillReadResponseDto
{
    /// <summary>
    /// BILL-generated ID of the recurring bill. The value begins with <c>btp</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the recurring bill is archived
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonPropertyName("vendorId")]
    public required string VendorId { get; init; }

    /// <summary>
    /// Recurring bill description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Number of bills generated from this recurring bill
    /// </summary>
    [JsonPropertyName("billsCount")]
    public required int BillsCount { get; init; }

    /// <summary>
    /// Recurring bill total amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the recurring bill is expired
    /// </summary>
    [JsonPropertyName("expired")]
    public required bool Expired { get; init; }

    [JsonPropertyName("schedule")]
    public required Schedule1BillV3RecurringbillsApi Schedule { get; init; }

    /// <summary>
    /// Recurring bill line item information
    /// </summary>
    [JsonPropertyName("recurringBillLineItems")]
    public required IReadOnlyList<RecurringBillResponseLineItem> RecurringBillLineItems { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processingOptions")]
    public ProcessingOptionsBillV3RecurringbillsApi? ProcessingOptions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentInformation")]
    public PaymentInformation? PaymentInformation { get; init; }

    /// <summary>
    /// Created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Updated date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    /// <summary>
    /// Vendor name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendorName")]
    public string? VendorName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
