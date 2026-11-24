using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a recurring bill
/// </summary>
public record RecurringBillCreateRequestDto
{
    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonPropertyName("vendorId")]
    [MinLength(1)]
    public required string VendorId { get; init; }

    /// <summary>
    /// User-generated invoice number. This value can be your chosen number scheme or bill due date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    [JsonPropertyName("schedule")]
    public required ScheduleBillV3RecurringbillsApi Schedule { get; init; }

    /// <summary>
    /// Recurring bill line item information
    /// </summary>
    [JsonPropertyName("recurringBillLineItems")]
    public required IReadOnlyList<RecurringBillCreateLineItem> RecurringBillLineItems { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processingOptions")]
    public ProcessingOptionsBillV3RecurringbillsApi? ProcessingOptions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentInformation")]
    public PaymentInformation? PaymentInformation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
